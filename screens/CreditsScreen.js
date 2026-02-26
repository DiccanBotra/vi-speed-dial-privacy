import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { t } from '../i18n/t';

export function CreditsScreen({ language }) {

  const email = '4d.studio.becej@gmail.com';
  const donateUrl = 'https://ko-fi.com/4dstudio';

  const version =
    Constants.expoConfig?.version ||
    Constants.manifest2?.extra?.expoClient?.version ||
    '1.1.0';

  const openEmail = async () => {
    Linking.openURL(`mailto:${email}`);
  };

  const openDonate = async () => {
    Linking.openURL(donateUrl);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      
      {/* APP */}
      <Text style={styles.appName}>VI Speed Dial</Text>
      <Text style={styles.subtitle}>Visually Impaired Speed Dial</Text>

      {/* BASIC INFO */}
      <View style={styles.card}>
        <Row label={t(language,'credits_version')} value={version} />
        <Row label={t(language,'credits_developer')} value="4D STUDIO" />
        <Row label={t(language,'credits_rights_label')} value={t(language,'credits_rights_value')} />
      </View>

      {/* 🔥 DONATE */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>{t(language,'donate_title')}</Text>
        <Text style={styles.text}>{t(language,'donate_text')}</Text>

        <TouchableOpacity style={styles.donateBtn} onPress={openDonate}>
          <Text style={styles.donateText}>☕ Buy me a coffee</Text>
        </TouchableOpacity>
      </View>

      {/* SUPPORT */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>{t(language,'credits_support_title')}</Text>
        <Text style={styles.text}>{t(language,'credits_support_text')}</Text>

        <TouchableOpacity style={styles.emailBtn} onPress={openEmail}>
          <Text style={styles.emailText}>4D STUDIO</Text>
        </TouchableOpacity>

        {/* <Text style={styles.emailHint}>{email}</Text> */}
      </View>

      {/* PRIVACY */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>{t(language,'privacy_title')}</Text>
        <Text style={styles.textSmall}>
          {t(language,'privacy_text')}
        </Text>
      </View>

      {/* TERMS */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>{t(language,'terms_title')}</Text>
        <Text style={styles.textSmall}>
          {t(language,'terms_text')}
        </Text>
      </View>

    </ScrollView>
  );
}

function Row({ label, value }) {
  return (
    <View style={styles.row}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowValue}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFD700',
    padding: 20,
  },

  appName: {
    fontSize: 30,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
  },

  subtitle: {
    marginTop: 4,
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 18,
  },

  card: {
    backgroundColor: '#000',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 6,
  },

  text: {
    fontSize: 16,
    color: '#FFD700',
    textAlign: 'center',
    lineHeight: 22,
  },

  textSmall: {
    fontSize: 14,
    color: '#FFD700',
    lineHeight: 20,
    textAlign: 'justify',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,215,0,0.25)',
  },

  rowLabel: {
    fontSize: 14,
    color: '#FFD700',
    opacity: 0.85,
  },

  rowValue: {
    fontSize: 14,
    color: '#FFD700',
    fontWeight: 'bold',
  },

  donateBtn: {
    marginTop: 12,
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 12,
  },

  donateText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },

  emailBtn: {
    marginTop: 12,
    backgroundColor: '#FFD700',
    paddingVertical: 14,
    borderRadius: 12,
  },

  emailText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '800',
    color: '#000',
  },

  emailHint: {
    marginTop: 10,
    color: '#FFD700',
    textAlign: 'center',
    fontSize: 14,
  },

});