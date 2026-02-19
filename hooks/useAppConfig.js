import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CONFIG_KEY = '@speed_dial_config';

const DEFAULT_CONFIG = {
  layout: null,          // 4 or 6
  language: null,        // 'sr' | 'en' | ...
  hasSeenGuide: false,   // da li je odgledano uputstvo
};

export function useAppConfig() {
  const [layout, setLayout] = useState(null);
  const [language, setLanguage] = useState(null);
  const [hasSeenGuide, setHasSeenGuide] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadConfig();
  }, []);

  async function loadConfig() {
    try {
      const saved = await AsyncStorage.getItem(CONFIG_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const merged = { ...DEFAULT_CONFIG, ...parsed };
        setLayout(merged.layout);
        setLanguage(merged.language);
        setHasSeenGuide(!!merged.hasSeenGuide);
      } else {
        setLayout(DEFAULT_CONFIG.layout);
        setLanguage(DEFAULT_CONFIG.language);
        setHasSeenGuide(DEFAULT_CONFIG.hasSeenGuide);
      }
    } catch (e) {
      // fallback na default ako je storage pokvaren
      setLayout(DEFAULT_CONFIG.layout);
      setLanguage(DEFAULT_CONFIG.language);
      setHasSeenGuide(DEFAULT_CONFIG.hasSeenGuide);
    } finally {
      setLoading(false);
    }
  }

  async function saveConfig(partial) {
    const next = {
      layout,
      language,
      hasSeenGuide,
      ...partial,
    };

    setLayout(next.layout);
    setLanguage(next.language);
    setHasSeenGuide(!!next.hasSeenGuide);

    await AsyncStorage.setItem(CONFIG_KEY, JSON.stringify(next));
  }

  async function saveLayout(value) {
    await saveConfig({ layout: value });
  }

  async function saveLanguage(value) {
    await saveConfig({ language: value });
  }

  async function markGuideSeen() {
    await saveConfig({ hasSeenGuide: true });
  }

  // Reset “prvog starta” (zajedno sa tvojim resetom kontakata/layout-a)
  async function resetOnboarding() {
    await saveConfig({
      layout: null,
      language: null,
      hasSeenGuide: false,
    });
  }

  return {
    layout,
    language,
    hasSeenGuide,
    loading,
    saveLayout,
    saveLanguage,
    markGuideSeen,
    resetOnboarding,
  };
}
