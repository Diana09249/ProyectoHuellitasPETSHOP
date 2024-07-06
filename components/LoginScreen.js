import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    if (username === 'user' && password === '123') {
      navigation.navigate('Main');
    } else {
      Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    width: '100%',
  },
});
