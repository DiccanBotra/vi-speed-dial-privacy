import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
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

const MAX_RESULTS = 80;
const DEBOUNCE_MS = 250;

// helper: “normalizuj” broj za pretragu (ne dira prikaz)
function normalizeForSearch(num) {
  if (!num) return '';
  return String(num).toLowerCase().replace(/\s+/g, '');
}

// Ključ za deduplikaciju brojeva
function phoneKey(num) {
  if (!num) return '';
  const s = String(num).trim();
  const plus = s.startsWith('+') ? '+' : '';
  const digits = s.replace(/\D/g, '');
  return plus ? `+${digits}` : digits;
}

export default function ContactPickerModal({ visible, onClose, onSelect, language }) {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  const contactsRef = useRef([]);

  // secondary modal for choosing among multiple phone numbers
  const [phoneModalVisible, setPhoneModalVisible] = useState(false);
  const [phoneModalName, setPhoneModalName] = useState('');
  const [phoneModalPhones, setPhoneModalPhones] = useState([]); // [{ label, number, numberLower }]

  useEffect(() => {
    if (!visible) return;

    // reset when opening
    setSearch('');
    setResults([]);
    setPhoneModalVisible(false);
    setPhoneModalName('');
    setPhoneModalPhones([]);

    loadContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  async function loadContacts() {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert(t(language, 'error_title'), t(language, 'contact_permission_error'));
      return;
    }

    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Name],
      pageSize: 5000,
      sort: Contacts.SortTypes.FirstName,
    });

    const normalized = (data || [])
      .map((c) => {
        const rawPhones = Array.isArray(c.phoneNumbers) ? c.phoneNumbers : [];

        const seen = new Set();

        const phones = rawPhones
          .map((p) => {
            const number = (p?.number || '').trim();
            return {
              label: p?.label || '',
              number,
              numberLower: normalizeForSearch(number),
              key: phoneKey(number),
            };
          })
          .filter((p) => !!p.number && !!p.key)
          .filter((p) => {
            if (seen.has(p.key)) return false; // 🔥 dedupe
            seen.add(p.key);
            return true;
          })
          .map(({ key, ...rest }) => rest);

        return {
          id: c.id,
          name: c.name || '',
          nameLower: (c.name || '').toLowerCase(),
          phones,
          firstPhone: phones[0]?.number || '',
          phonesSearch: phones.map((p) => p.numberLower).join(' '),
        };
      })
      .filter((c) => c.phones.length > 0);

    contactsRef.current = normalized;
    setResults(normalized.slice(0, MAX_RESULTS));
  }

  /**
   * Debounced search
   */
  useEffect(() => {
    if (!visible) return;

    const id = setTimeout(() => {
      const qRaw = search.trim().toLowerCase();
      const qPhone = normalizeForSearch(qRaw);
      const list = contactsRef.current;

      if (!qRaw) {
        setResults(list.slice(0, MAX_RESULTS));
        return;
      }

      const next = [];
      for (let i = 0; i < list.length; i++) {
        const c = list[i];

        const matchName = c.nameLower.includes(qRaw);
        const matchPhone =
          qPhone.length > 0 &&
          (c.phonesSearch.includes(qPhone) ||
            normalizeForSearch(c.firstPhone).includes(qPhone));

        if (matchName || matchPhone) {
          next.push(c);
          if (next.length >= MAX_RESULTS) break;
        }
      }

      setResults(next);
    }, DEBOUNCE_MS);

    return () => clearTimeout(id);
  }, [search, visible]);

  const closePhoneModal = useCallback(() => {
    setPhoneModalVisible(false);
    setPhoneModalName('');
    setPhoneModalPhones([]);
  }, []);

  const openPhoneModal = useCallback((contact) => {
    setPhoneModalName(contact.name);
    setPhoneModalPhones(contact.phones);
    setPhoneModalVisible(true);
  }, []);

  const handleSelectPhone = useCallback(
    (name, phone) => {
      closePhoneModal();
      onSelect?.({ name, phone });
    },
    [closePhoneModal, onSelect]
  );

  const renderItem = useCallback(
    ({ item }) => {
      const moreCount = item.phones.length - 1;

      return (
        <TouchableOpacity
          style={styles.item}
          onPress={() => {
            if (item.phones.length === 1) {
              onSelect?.({ name: item.name, phone: item.phones[0].number });
            } else {
              openPhoneModal(item);
            }
          }}
        >
          <View style={styles.row}>
            <Text style={styles.name}>{item.name}</Text>

            {moreCount > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{`+${moreCount}`}</Text>
              </View>
            )}
          </View>

          <Text style={styles.phone}>{item.firstPhone}</Text>
        </TouchableOpacity>
      );
    },
    [onSelect, openPhoneModal]
  );

  const keyExtractor = useCallback((item) => item.id, []);

  const phoneModalTitle = useMemo(() => {
    return t(language, 'choose_number_title') || 'Choose a number';
  }, [language]);

  const renderPhoneOption = useCallback(
    ({ item }) => {
      const label = item.label ? ` (${item.label})` : '';
      return (
        <TouchableOpacity
          style={styles.phoneOption}
          onPress={() => handleSelectPhone(phoneModalName, item.number)}
        >
          <Text style={styles.phoneOptionNumber}>
            {item.number}
            {label}
          </Text>
        </TouchableOpacity>
      );
    },
    [handleSelectPhone, phoneModalName]
  );

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
            windowSize={7}
            removeClippedSubviews
          />

          <TouchableOpacity style={styles.cancel} onPress={onClose}>
            <Text style={styles.cancelText}>{t(language, 'cancel_upper')}</Text>
          </TouchableOpacity>
        </View>

        {/* Modal za izbor broja */}
        <Modal
          visible={phoneModalVisible}
          transparent
          animationType="fade"
          onRequestClose={closePhoneModal}
        >
          <View style={styles.phoneOverlay}>
            <View style={styles.phoneModal}>
              <Text style={styles.phoneTitle}>{phoneModalTitle}</Text>
              <Text style={styles.phoneSubtitle}>{phoneModalName}</Text>

              <FlatList
                data={phoneModalPhones}
                keyExtractor={(item, idx) => `${item.number}-${idx}`}
                renderItem={renderPhoneOption}
                keyboardShouldPersistTaps="handled"
              />

              <TouchableOpacity style={styles.phoneCancel} onPress={closePhoneModal}>
                <Text style={styles.phoneCancelText}>{t(language, 'cancel_upper')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flexShrink: 1,
  },
  badge: {
    backgroundColor: '#111',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
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
  phoneOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
  },
  phoneModal: {
    width: '100%',
    maxWidth: 520,
    maxHeight: '70%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
  },
  phoneTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  phoneSubtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginVertical: 8,
  },
  phoneOption: {
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  phoneOptionNumber: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  phoneCancel: {
    backgroundColor: '#FF0000',
    padding: 15,
    borderRadius: 8,
    marginTop: 12,
  },
  phoneCancelText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});