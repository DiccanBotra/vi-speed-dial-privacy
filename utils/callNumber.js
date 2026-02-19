import { Alert, Linking, Platform, PermissionsAndroid } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { t } from '../i18n/t';

export async function callNumber(language, name, phone) {
  if (!phone) {
    Alert.alert(t(language, 'error_title'), t(language, 'phone_missing'));
    return;
  }

  const telUrl = `tel:${phone}`;

  // iOS: ne može direktan GSM poziv bez Phone app
  if (Platform.OS !== 'android') {
    const url = `telprompt:${phone}`;
    try {
      const supported = await Linking.canOpenURL(url);
      if (!supported) {
        Alert.alert(t(language, 'error_title'), t(language, 'call_not_supported'));
        return;
      }
      await Linking.openURL(url);
    } catch {
      Alert.alert(t(language, 'error_title'), t(language, 'call_failed'));
    }
    return;
  }

  // Android: pokušaj direktan poziv (bez dialer ekrana)
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CALL_PHONE
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      await IntentLauncher.startActivityAsync('android.intent.action.CALL', {
        data: telUrl,
      });
      return;
    }

    // Ako korisnik odbije dozvolu → fallback na dialer
    await Linking.openURL(telUrl);
  } catch (e) {
    // Ako nešto pukne → fallback na dialer
    try {
      await Linking.openURL(telUrl);
    } catch {
      Alert.alert(t(language, 'error_title'), t(language, 'call_failed'));
    }
  }
}
