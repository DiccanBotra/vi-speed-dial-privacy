import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import DialButton from './DialButton';

export default function DialGrid({ contacts, layout, onCall, language }) {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  const topBarHeight = 100;
  const rows = layout === 4 ? 2 : 3;

  const buttonHeight = (screenHeight - topBarHeight) / rows;
  const buttonWidth = screenWidth / 2;

  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <DialButton
          language={language}
          key={contact.id || index}
          contact={contact}
          width={buttonWidth}
          height={buttonHeight}
          onPress={() => onCall(contact)} // tap
          onLongPressCall={onCall}   // long press = poziv
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 1,
  },
});