import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import AdminBar from '../components/AdminBar';
import DialGrid from '../components/DialGrid';
import SettingsPanel from '../components/SettingsPanel';
import EditContactModal from '../components/modals/EditContactModal';
import { callNumber } from '../utils/callNumber';
import { CreditsScreen } from './CreditsScreen';

export function DialScreen({ contacts, layout, onUpdateContacts, onReset, language }) {
  const [showSettings, setShowSettings] = useState(false);
  const [showCredits, setShowCredits] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [editingContact, setEditingContact] = useState(null);

  const handleBack = () => {
    if (showCredits) setShowCredits(false);
    else if (showSettings) setShowSettings(false);
  };

  return (
    <View style={styles.container}>
      <AdminBar
        language={language}
        showSettings={showSettings}
        showCredits={showCredits}
        onBack={handleBack}
        onToggleSettings={() => {
          setShowCredits(false);
          setShowSettings((prev) => !prev);
        }}
        onOpenCredits={() => {
          setShowSettings(false);
          setShowCredits(true);
        }}
      />

      {showCredits ? (
        <CreditsScreen language={language} />
      ) : showSettings ? (
        <SettingsPanel
          language={language}
          contacts={contacts}
          onUpdateContacts={onUpdateContacts}
          onReset={onReset}
        />
      ) : (
        <DialGrid
          language={language}
          contacts={contacts}
          layout={layout}
          onCall={(contact) => callNumber(language, contact.name, contact.phone)}
        />
      )}

      <EditContactModal
        visible={showModal}
        contact={editingContact}
        onClose={() => {
          setShowModal(false);
          setEditingContact(null);
        }}
        onSave={() => setShowModal(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
});
