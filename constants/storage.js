import AsyncStorage from '@react-native-async-storage/async-storage';

export const STORAGE_KEY = '@speed_dial_contacts';
export const LAYOUT_KEY = '@speed_dial_layout';

export async function saveContacts(data) {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export async function loadContacts() {
  const data = await AsyncStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export async function saveLayout(layout) {
  await AsyncStorage.setItem(LAYOUT_KEY, String(layout));
}

export async function loadLayout() {
  const data = await AsyncStorage.getItem(LAYOUT_KEY);
  return data ? Number(data) : null;
}

export async function resetStorage() {
  await AsyncStorage.removeItem(STORAGE_KEY);
  await AsyncStorage.removeItem(LAYOUT_KEY);
}
