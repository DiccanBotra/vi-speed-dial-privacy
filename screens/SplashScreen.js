import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export function SplashScreen({ onDone }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onDone?.();
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      
      {/* Tekst iznad logoa */}
      <Text style={styles.title}>
        VISUALLY IMPAIRED{'\n'}
        SPEED DIAL
      </Text>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>
        by 4D.STUDIO
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 20, // Razmak između teksta i logoa
    textTransform: 'uppercase', // Osigurava velika slova
  },

  logo: {
    width: 220,
    height: 220,
  },

  subtitle: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
    marginTop: 20, // Razmak između logoa i "by 4D.STUDIO"
  },
});