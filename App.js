import React, { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { useAppConfig } from './hooks/useAppConfig';
import { useContactsStorage } from './hooks/useContactsStorage';

import { StartScreen } from './screens/StartScreen';
import { DialScreen } from './screens/DialScreen';

import { SplashScreen } from './screens/SplashScreen';
import { LanguageSelectScreen } from './screens/LanguageSelectScreen';
import { SetupGuideScreen } from './screens/SetupGuideScreen';

import { createDefaultContacts } from './utils/defaultContact';

export default function App() {
  const {
    layout,
    language,
    hasSeenGuide,
    loading,
    saveLayout,
    saveLanguage,
    markGuideSeen,
    resetOnboarding,
  } = useAppConfig();

  const { contacts, updateContacts, loading: loadingContacts } =
    useContactsStorage();

  const [splashDone, setSplashDone] = useState(false);

  // 0) Splash (uvek)
  if (!splashDone) {
    return <SplashScreen onDone={() => setSplashDone(true)} />;
  }

  // Loading state za config/contacts
  if (loading || loadingContacts) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} />;
  }

  // 1) Prvi start / posle reseta: UVEK pokaži izbor jezika
  if (!language) {
    return (
      <LanguageSelectScreen
        onSelect={async (lang) => {
          await saveLanguage(lang);
        }}
      />
    );
  }

  // 2) Prvi start / posle reseta: Uputstvo nakon izbora jezika
  if (!hasSeenGuide) {
    return (
      <SetupGuideScreen
        language={language}
        onDone={async () => {
          await markGuideSeen();
        }}
      />
    );
  }

  // 3) Prvi start: izbor 4 ili 6 (na izabranom jeziku)
  if (!layout) {
    return (
      <StartScreen
        language={language}
        onSelect={async (value) => {
          await saveLayout(value);
          await updateContacts(createDefaultContacts(value));
        }}
      />
    );
  }

  // 4) Glavni ekran
  return (
    <DialScreen
      language={language}
      contacts={contacts}
      layout={layout}
      onUpdateContacts={updateContacts}
      onReset={async () => {
        await resetOnboarding();   // resetuje layout+language+guide
        await updateContacts([]);  // briše kontakte
      }}
    />
  );
}
