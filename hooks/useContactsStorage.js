import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createDefaultContacts } from '../utils/defaultContact';

const STORAGE_KEY = '@speed_dial_contacts';

export function useContactsStorage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    load();
  }, []);

  async function load() {
    try {
      const saved = await AsyncStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved); // ⚠️ može da pukne
        setContacts(parsed);
      } else {
        const defaults = createDefaultContacts(4);
        setContacts(defaults);
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(defaults));
      }
    } catch (error) {
      console.error('❌ Error loading contacts:', error);
      setContacts([]); // fallback
    } finally {
      setLoading(false); // ✅ GARANTOVANO se izvršava
    }
  }

  async function save(data) {
    try {
      setContacts(data);
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('❌ Error saving contacts:', error);
    }
  }

  return {
    contacts,
    loading,
    updateContacts: save,
  };
}
