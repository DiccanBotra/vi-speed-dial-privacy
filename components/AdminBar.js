import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';
import { t } from '../i18n/t';

function BackArrow() {
  return (
    <Svg width="30" height="30" viewBox="0 0 30 30">
      <Polygon points="25,5 25,25 5,15" fill="#000" />
    </Svg>
  );
}

export default function AdminBar({
  onToggleSettings,
  showSettings,
  language,
  onOpenCredits,
  showCredits,
  onBack, // 👈 novo: nazad (zatvara credits ili settings)
}) {
  const showBack = !!showSettings || !!showCredits;

  const title = showCredits
    ? t(language, 'credits_title_bar')
    : showSettings
      ? t(language, 'settings_plain')
      : t(language, 'settings_with_icon');

  return (
    <View style={styles.bar}>
      <View style={styles.content}>
        {showBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <BackArrow />
          </TouchableOpacity>
        )}

        {/* centriran title */}
        <Text style={styles.text}>{title}</Text>

        {/* desno: Credits samo kad nismo već na Credits */}
        {!showCredits && (
          <TouchableOpacity
            style={styles.creditsButton}
            onPress={onOpenCredits}
            accessibilityLabel="Credits"
          >
            <Text style={styles.creditsText}>!</Text>
          </TouchableOpacity>
        )}

        {/* kad smo u settings modu, klik na title neka i dalje toggluje settings */}
        {!showCredits && (
          <TouchableOpacity style={styles.invisibleTap} onPress={onToggleSettings} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 110,
    backgroundColor: '#FFD700',
    justifyContent: 'flex-end',
    paddingBottom: 15,
  },
  content: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    left: 20,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  creditsButton: {
    position: 'absolute',
    right: 20,
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  creditsText: {
    color: '#FFD700',
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 26,
  },
  text: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
  },

  // “nevidljivo dugme” preko naslova, da zadržiš tap-to-settings ponašanje
  invisibleTap: {
    position: 'absolute',
    left: 80,
    right: 80,
    top: 0,
    bottom: 0,
  },
});
