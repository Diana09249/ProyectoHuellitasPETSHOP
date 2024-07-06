import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Cart({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart Screen</Text>
      <Button
        title="View Cart Items"
        onPress={() => {/* Agregar funcionalidad para ver los items del carrito */}}
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
