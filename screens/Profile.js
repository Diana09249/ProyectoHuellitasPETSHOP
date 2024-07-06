import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Profile({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button
        title="Edit Profile"
        onPress={() => {/* Agregar funcionalidad para editar el perfil */}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
