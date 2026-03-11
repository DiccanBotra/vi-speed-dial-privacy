import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { t } from '../../i18n/t';

export default function DeleteContactModal({ visible, onClose, onConfirm, language }) {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>
            {t(language, 'delete_contact_title')}
          </Text>

          <Text style={styles.text}>
            {t(language, 'delete_contact_confirm')}
          </Text>

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.noBtn} onPress={onClose}>
              <Text style={styles.noText}>
                {t(language, 'no')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.yesBtn} onPress={onConfirm}>
              <Text style={styles.yesText}>
                {t(language, 'yes')}
              </Text>
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
    backgroundColor: 'rgba(0,0,0,0.55)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modal: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 12,
  },
  text: {
    fontSize: 17,
    color: '#222',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  noBtn: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  yesBtn: {
    flex: 1,
    backgroundColor: '#FF0000',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  noText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  yesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});