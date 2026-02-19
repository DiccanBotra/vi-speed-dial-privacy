import React, { useState } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  Platform 
} from 'react-native';

import EditContactModal from './modals/EditContactModal';
import ColorPickerModal from './modals/ColorPickerModal';
import ContactPickerModal from './modals/ContactPickerModal';
import ShapePickerModal from './modals/ShapePickerModal';

import { t } from '../i18n/t';

export default function SettingsPanel({ contacts, onUpdateContacts, onReset, language }) {
  const [editIndex, setEditIndex] = useState(null);
  const [colorIndex, setColorIndex] = useState(null);
  const [contactIndex, setContactIndex] = useState(null);
  const [shapeIndex, setShapeIndex] = useState(null);

  function updateContact(updated) {
    const newContacts = [...contacts];
    newContacts[editIndex] = updated;
    onUpdateContacts(newContacts);
  }

  function updateColor(color) {
    const newContacts = [...contacts];
    newContacts[colorIndex] = {
      ...newContacts[colorIndex],
      color: color.value,
      textColor: color.textColor,
      shapeColor: color.textColor,
    };
    onUpdateContacts(newContacts);
  }

  function updateFromDevice(contact) {
    const newContacts = [...contacts];
    newContacts[contactIndex] = {
      ...newContacts[contactIndex],
      name: contact.name,
      phone: contact.phone.replace(/\s/g, ''),
    };
    onUpdateContacts(newContacts);
  }

  function updateShape(shapeType) {
    const newContacts = [...contacts];
    newContacts[shapeIndex] = { ...newContacts[shapeIndex], shape: shapeType };
    onUpdateContacts(newContacts);
  }

  return (
    <>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.topBorder} />
        <ScrollView 
          style={styles.container}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={true}
        >
          {contacts.map((c, i) => (
            <View key={i} style={styles.item}>
              <View style={styles.colorContainer}>
                <View style={[styles.color, { backgroundColor: c.color }]} />
              </View>
              
              <View style={styles.contentContainer}>
                {/* Ime i broj iznad ikona */}
                <View style={styles.contactInfo}>
                  <Text style={styles.name}>
                    {c.name || t(language, 'empty_contact')}
                  </Text>
                  <Text style={styles.phone}>
                    {c.phone || t(language, 'no_number')}
                  </Text>
                </View>

                {/* Ikone ispod imena */}
                <View style={styles.buttons}>
                  <TouchableOpacity style={styles.btn} onPress={() => setEditIndex(i)}>
                    <Text style={styles.editIcon}>✎</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setContactIndex(i)}>
                    <Text style={styles.icon}>📱</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setColorIndex(i)}>
                    <Text style={styles.icon}>🎨</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.btn} onPress={() => setShapeIndex(i)}>
                    <Text style={styles.icon}>🔷</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}

          <TouchableOpacity style={styles.reset} onPress={onReset}>
            <Text style={styles.resetText}>{t(language, 'reset_app')}</Text>
          </TouchableOpacity>
          
          {/* Dodatni prostor na dnu za Android */}
          {Platform.OS === 'android' && <View style={styles.androidBottomSpace} />}
        </ScrollView>
      </SafeAreaView>

      {/* MODALI - isti kao pre */}
      <EditContactModal
        language={language}
        visible={editIndex !== null}
        contact={contacts[editIndex]}
        onClose={() => setEditIndex(null)}
        onSave={updateContact}
      />

      <ColorPickerModal
        language={language}
        visible={colorIndex !== null}
        onClose={() => setColorIndex(null)}
        onSelect={(color) => {
          updateColor(color);
          setColorIndex(null);
        }}
      />

      <ContactPickerModal
        language={language}
        visible={contactIndex !== null}
        onClose={() => setContactIndex(null)}
        onSelect={(contact) => {
          updateFromDevice(contact);
          setContactIndex(null);
        }}
      />

      <ShapePickerModal
        language={language}
        visible={shapeIndex !== null}
        onClose={() => setShapeIndex(null)}
        onSelect={(shapeType) => {
          updateShape(shapeType);
          setShapeIndex(null);
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFD700',
  },
  topBorder: {
    height: 4,
    backgroundColor: '#000',
    width: '100%',
  },
  container: { 
    flex: 1,
    backgroundColor: '#FFD700',
  },
  scrollContent: {
    paddingBottom: Platform.OS === 'android' ? 30 : 20, // Dodatni prostor za Android
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#000',
    backgroundColor: '#FFD700',
  },
  colorContainer: {
    marginRight: 15,
  },
  color: {
    width: 50,
    height: 50,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#000',
  },
  contentContainer: {
    flex: 1,
  },
  contactInfo: {
    marginBottom: 10,
  },
  name: { 
    color: '#000',
    fontWeight: 'bold', 
    fontSize: 16,
    marginBottom: 2,
  },
  phone: { 
    color: '#666',
    fontSize: 14,
  },
  buttons: { 
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  btn: {
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 2,
    padding: 10,
    marginRight: 8,
    marginBottom: 4,
    borderRadius: 8,
    minWidth: 44,
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    color: '#000',
  },
  editIcon: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
  },
  reset: {
    backgroundColor: '#FF0000',
    padding: 20,
    margin: 20,
    marginBottom: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  resetText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 18 
  },
  androidBottomSpace: {
    height: 20, // Dodatni prostor za Android
  },
});