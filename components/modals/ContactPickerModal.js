import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react';
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  FlatList,
} from 'react-native';
import * as Contacts from 'expo-contacts';

import { t } from '../../i18n/t';

const MAX_RESULTS = 80;   // 🔥 ograničenje prikaza da ne renderuje hiljade stavki
const DEBOUNCE_MS = 250;

export default function ContactPickerModal({ visible, onClose, onSelect, language }) {
  const [allContacts, setAllContacts] = useState([]);
  const [results, setResults] = useState([]); // ono što prikazujemo (max 80)
  const [search, setSearch] = useState('');

  const contactsRef = useRef([]); // čuvamo listu i u ref-u da filter ne zavisi od rendera

  useEffect(() => {
    if (!visible) return;
    loadContacts();
    // reset kada se otvori
    setSearch('');
    setResults([]);
  }, [visible]);

  async function loadContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(
        t(language, 'error_title'),
        t(language, 'contact_permission_error')
      );
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
      pageSize: 5000,
      sort: Contacts.SortTypes.FirstName,
    });

    // Normalizacija jednom (ključna stvar)
    const normalized = (data || [])
      .map((c) => {
        const phone = c.phoneNumbers?.[0]?.number || '';
        return {
          id: c.id, // expo-contacts obično ima id
          name: c.name || '',
          phone,
          nameLower: (c.name || '').toLowerCase(),
          phoneLower: phone.toLowerCase(),
        };
      })
      // opcionalno: izbaci kontakte bez broja (mnogo ubrzava + bolji UX)
      .filter((c) => !!c.phone);

    contactsRef.current = normalized;
    setAllContacts(normalized);

    // inicijalno pokaži prvih 80 (da ne bude prazno)
    setResults(normalized.slice(0, MAX_RESULTS));
  }

  // ✅ DEBOUNCE pretrage: rezultat računamo u timeout-u i upisujemo u state
  useEffect(() => {
    if (!visible) return;

    const id = setTimeout(() => {
      const q = search.trim().toLowerCase();
      const list = contactsRef.current;

      if (!q) {
        setResults(list.slice(0, MAX_RESULTS));
        return;
      }

      // filter po imenu ili broju (korisno)
      const next = [];
      for (let i = 0; i < list.length; i++) {
        const c = list[i];
        if (c.nameLower.includes(q) || c.phoneLower.includes(q)) {
          next.push(c);
          if (next.length >= MAX_RESULTS) break; // hard stop
        }
      }
      setResults(next);
    }, DEBOUNCE_MS);

    return () => clearTimeout(id);
  }, [search, visible]);

  const renderItem = useCallback(({ item }) => {
    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => onSelect?.({ name: item.name, phone: item.phone })}
      >
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.phone}>{item.phone}</Text>
      </TouchableOpacity>
    );
  }, [onSelect]);

  const keyExtractor = useCallback((item) => item.id, []);

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{t(language, 'contact_picker_title')}</Text>

          <TextInput
            style={styles.input}
            placeholder={t(language, 'contact_search_placeholder')}
            placeholderTextColor="#666"
            selectionColor="#000"
            value={search}
            onChangeText={setSearch}
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="search"
          />

          <FlatList
            style={styles.list}
            data={results}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            keyboardShouldPersistTaps="handled"
            initialNumToRender={20}
            maxToRenderPerBatch={20}
            updateCellsBatchingPeriod={50}
            windowSize={7}
            removeClippedSubviews
          />

          <TouchableOpacity style={styles.cancel} onPress={onClose}>
            <Text style={styles.cancelText}>{t(language, 'cancel_upper')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '90%',
    maxHeight: '80%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
    color: '#000',
  },
  list: { maxHeight: 300 },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: { 
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  phone: { fontSize: 14, color: '#666' },
  cancel: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  cancelText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
