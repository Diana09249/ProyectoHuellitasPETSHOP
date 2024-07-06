import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4BB2F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
});
