import React, { useState, useEffect } from 'react';
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

import { t } from '../../i18n/t';

export default function EditContactModal({
  visible,
  contact,
  onClose,
  onSave,
  language,
}) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name || '');
      setPhone(contact.phone || '');
    }
  }, [contact]);

  function handleSave() {
    onSave({ ...contact, name, phone });
    onClose();
  }

  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{t(language, 'contact_title')}</Text>

          <TextInput
            style={styles.input}
            placeholder={t(language, 'name_placeholder')}
            placeholderTextColor="#666"
            selectionColor="#000"
            value={name}
            onChangeText={setName}
          />

          <TextInput
            style={styles.input}
            placeholder={t(language, 'phone_placeholder')}
            placeholderTextColor="#666"
            selectionColor="#000"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />

          <View style={styles.buttons}>
            <TouchableOpacity style={[styles.btn, styles.cancel]} onPress={onClose}>
              <Text style={styles.btnText}>{t(language, 'cancel')}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.btn, styles.save]} onPress={handleSave}>
              <Text style={styles.btnText}>{t(language, 'save')}</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    marginBottom: 10,
    color: '#000',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
  btn: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancel: { backgroundColor: '#FF0000' },
  save: { backgroundColor: '#4CAF50' },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
