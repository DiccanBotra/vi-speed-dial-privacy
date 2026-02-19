import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import Svg, { Circle, Polygon, Rect } from 'react-native-svg';

import { t } from '../i18n/t';

function Shape({ shape, color }) {
  const size = 90;

  switch (shape) {
    case 'circle':
      return (
        <Svg width={size} height={size}>
          <Circle cx="45" cy="45" r="40" fill={color} />
        </Svg>
      );

    case 'square':
      return (
        <Svg width={size} height={size}>
          <Rect x="5" y="5" width="80" height="80" rx="8" fill={color} />
        </Svg>
      );

    case 'triangle':
      return (
        <Svg width={size} height={size}>
          <Polygon points="45,5 85,85 5,85" fill={color} />
        </Svg>
      );

    case 'star':
      return (
        <Svg width={size} height={size}>
          <Polygon points="45,5 55,35 85,35 60,55 70,85 45,65 20,85 30,55 5,35 35,35" fill={color} />
        </Svg>
      );

    case 'hexagon':
      return (
        <Svg width={size} height={size}>
          <Polygon points="45,5 80,25 80,65 45,85 10,65 10,25" fill={color} />
        </Svg>
      );

    case 'diamond':
      return (
        <Svg width={size} height={size}>
          <Polygon points="45,5 85,45 45,85 5,45" fill={color} />
        </Svg>
      );

    default:
      return null;
  }
}

export default function DialButton({
  contact,
  width,
  height,
  onPress,          // TAP
  onLongPressCall,  // LONG PRESS → poziv
  language,
}) {
  const handleLongPress = () => {
    if (!contact?.phone) return; // no number -> no call. nema broja -> nema poziva
    if (typeof onLongPressCall !== 'function') return; // avoid crash
    onLongPressCall?.(contact);
  };

  return (
    <Pressable
      style={[
        styles.container,
        {
          width,
          height,
          backgroundColor: contact.color || '#FFFFFF',
        },
      ]}
      onPress={onPress}
      onLongPress={handleLongPress}
      delayLongPress={1000} // ✅ 1 sekunda
    >
      <View style={styles.content}>
        <Shape
          shape={contact.shape}
          color={contact.shapeColor || '#000'}
        />

        <Text
          style={[
            styles.label,
            { color: contact.textColor || '#000' },
          ]}
        >
          {contact.name || t(language, 'empty')}
        </Text>

        {contact.phone && (
          <Text
            style={[
              styles.phone,
              { color: contact.textColor || '#000' },
            ]}
          >
            {contact.phone}
          </Text>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  phone: {
    marginTop: 5,
    fontSize: 16,
    textAlign: 'center',
  },
});
