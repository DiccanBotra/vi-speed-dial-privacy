import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { t } from '../i18n/t';

export function SetupGuideScreen({ language, onDone }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView 
        style={styles.container} 
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{t(language, 'guide_title')}</Text>
        <Text style={styles.subtitle}>{t(language, 'guide_subtitle')}</Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t(language, 'guide_section_phone_title')}</Text>
          <Bullet text={t(language, 'guide_phone_1')} />
          <Bullet text={t(language, 'guide_phone_2')} />
          <Bullet text={t(language, 'guide_phone_3')} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t(language, 'guide_section_app_title')}</Text>
          <Bullet text={t(language, 'guide_app_1')} />
          <Bullet text={t(language, 'guide_app_2')} />
          <Bullet text={t(language, 'guide_app_3')} />
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>{t(language, 'guide_section_call_title')}</Text>
          <Bullet text={t(language, 'guide_call_1')} />
          <Bullet text={t(language, 'guide_call_2')} />
        </View>

        <TouchableOpacity style={styles.cta} onPress={onDone}>
          <Text style={styles.ctaText}>{t(language, 'guide_button')}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function Bullet({ text }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 30, // Dodatni padding na dnu
  },
  title: {
    fontSize: 35,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
    paddingTop: 20, // Dodaj padding na vrhu
  },
  subtitle: {
    fontSize: 17,
    color: '#000',
    textAlign: 'center',
    marginBottom: 18,
    opacity: 0.9,
  },
  card: {
    backgroundColor: '#000',
    borderRadius: 16,
    padding: 12,
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 12,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  bulletDot: {
    color: '#FFD700',
    fontSize: 17,
    lineHeight: 24,
    marginRight: 10,
    width: 18,
    textAlign: 'center',
  },
  bulletText: {
    flex: 1,
    color: '#FFD700',
    fontSize: 17,
    lineHeight: 24,
  },
  cta: {
    marginTop: 6,
    marginBottom: 30, // Dodatni prostor na dnu
    backgroundColor: '#FFD700',
    paddingVertical: 18,
    borderBlockColor: '#000',
    borderWidth: 3,
    borderRadius: 14,
    alignItems: 'center',
  },
  ctaText: {
    color: '#000',
    fontSize: 22,
    fontWeight: '800',
  },
});