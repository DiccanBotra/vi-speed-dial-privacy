import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AVAILABLE_COLORS } from '../../constants/colors';

import { t } from '../../i18n/t';

export default function ColorPickerModal({ visible, onClose, onSelect, language }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{t(language, 'color_picker_title')}</Text>

          <View style={styles.grid}>
            {AVAILABLE_COLORS.map((color) => (
              <TouchableOpacity
                key={color.key}
                style={[styles.colorBox, { backgroundColor: color.value }]}
                onPress={() => onSelect(color)}
              >
                <Text style={{ color: color.textColor, fontWeight: 'bold' }}>
                  {t(language, color.key)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

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
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#000',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colorBox: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
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
});
