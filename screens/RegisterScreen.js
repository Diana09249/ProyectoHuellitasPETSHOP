import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, setDoc, doc } from 'firebase/firestore';
import { auth } from '../credenciales';
import appFirebase from '../credenciales';

const db = getFirestore(appFirebase);

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [docType, setDocType] = useState('DNI');  // Default to 'DNI'
  const [docNumber, setDocNumber] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        email,
        username,
        fullName,
        docType,
        docNumber,
        age,
        birthDate,
        address,
      });

      Alert.alert('Registration Successful', 'You have registered successfully!');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Register</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Username" value={username} onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Full Name" value={fullName} onChangeText={setFullName} />
      
      <Picker
        selectedValue={docType}
        onValueChange={(itemValue) => setDocType(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="DNI" value="DNI" />
        <Picker.Item label="PASAPORTE" value="PASAPORTE" />
        <Picker.Item label="RUC" value="RUC" />
      </Picker>
      
      <TextInput style={styles.input} placeholder="Document Number" value={docNumber} onChangeText={setDocNumber} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} />
      <TextInput style={styles.input} placeholder="Birth Date" value={birthDate} onChangeText={setBirthDate} />
      <TextInput style={styles.input} placeholder="Address" value={address} onChangeText={setAddress} />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  picker: {
    height: 50,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#525FE1',
    borderRadius: 30,
    paddingVertical: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  error: {
    color: 'red',
    marginBottom: 12,
  },
});
