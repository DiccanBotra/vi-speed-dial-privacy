import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SHAPES } from '../../constants/shapes';
import Svg, { Circle, Polygon, Rect } from 'react-native-svg';

import { t } from '../../i18n/t';

function ShapePreview({ type, color = '#000' }) {
  const size = 80;

  switch (type) {
    case 'circle':
      return <Svg width={size} height={size}><Circle cx="40" cy="40" r="35" fill={color} /></Svg>;
    case 'square':
      return <Svg width={size} height={size}><Rect x="10" y="10" width="60" height="60" rx="8" fill={color} /></Svg>;
    case 'triangle':
      return <Svg width={size} height={size}><Polygon points="40,10 70,70 10,70" fill={color} /></Svg>;
    case 'star':
      return <Svg width={size} height={size}><Polygon points="40,5 50,30 75,30 55,45 65,70 40,55 15,70 25,45 5,30 30,30" fill={color} /></Svg>;
    case 'hexagon':
      return <Svg width={size} height={size}><Polygon points="40,5 70,22 70,58 40,75 10,58 10,22" fill={color} /></Svg>;
    case 'diamond':
      return <Svg width={size} height={size}><Polygon points="40,5 75,40 40,75 5,40" fill={color} /></Svg>;
    default:
      return null;
  }
}

export default function ShapePickerModal({ visible, onClose, onSelect, language }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{t(language, 'shape_picker_title')}</Text>

          <View style={styles.grid}>
            {SHAPES.map((shape) => (
              <TouchableOpacity
                key={shape.key}
                style={styles.shapeBox}
                onPress={() => onSelect(shape.type)}
              >
                <ShapePreview type={shape.type} color="#000" />
                <Text style={styles.shapeName}>{t(language, shape.key)}</Text>
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
  shapeBox: {
    width: '48%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderWidth: 2,
    borderColor: '#ddd',
  },
  shapeName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cancel: {
    backgroundColor: '#FF0000',
    padding: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  cancelText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});