import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { LANGUAGES } from '../i18n/languages';

export function LanguageSelectScreen({ onSelect }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>
        Izaberite jezik{"\n"}
        Choose your language{"\n"}
        Sprache wählen
      </Text> */}

      {LANGUAGES.map((lang) => (
        <TouchableOpacity
          key={lang.code}
          style={styles.button}
          onPress={() => onSelect?.(lang.code)}
        >
          <Image source={lang.flag} style={styles.flag} />

          <Text style={styles.buttonText}>
            {lang.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
    // lineHeight: 40,
  },
  flag: {
  width: 24,
  height: 24,
  marginRight: 12,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 14,
    marginVertical: 6,
    minWidth: 260,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
  },
  buttonText: {
    color: '#FFD700',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
