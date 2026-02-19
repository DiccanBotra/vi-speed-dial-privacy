import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { t } from '../i18n/t';

export function StartScreen({ onSelect, language }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t(language, 'start_title')}</Text>
      <Text style={styles.subtitle}>{t(language, 'start_subtitle')}</Text>

      <TouchableOpacity style={styles.button} onPress={() => onSelect(4)}>
        <Text style={styles.buttonText}>{t(language, 'start_4')}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onSelect(6)}>
        <Text style={styles.buttonText}>{t(language, 'start_6')}</Text>
      </TouchableOpacity>
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
    fontSize: 45,
    fontWeight: '800',
    color: '#000',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
    color: '#000',
  },
  button: {
    backgroundColor: '#FFD700',
    paddingVertical: 25,
    paddingHorizontal: 60,
    borderColor: '#000',
    borderWidth: 4,
    borderRadius: 15,
    marginVertical: 15,
    minWidth: 260,
  },
  buttonText: {
    color: '#000',
    fontSize: 32,
    fontWeight: '800',
    textAlign: 'center',
  },
});
