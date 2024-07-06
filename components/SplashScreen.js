import React from 'react';
import {Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function SplashScreen({ navigation }) {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000); // Esperar 2 segundos antes de redirigir al login
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/huella gris.jpg')}
      />
      <Text style={styles.Text}>Bienvenido al PETSHOP</Text>
      <Text>Cargando...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#4BB2F9',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    paddingTop: 50,

  },
  tinyLogo: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Fondo semi-transparente para el contenedor
    padding: 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
  Text:{
    color:'skyblue',
  }
});
