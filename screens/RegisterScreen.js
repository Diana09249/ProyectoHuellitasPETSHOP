import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db } from '../credenciales';

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [docType, setDocType] = useState('DNI');
  const [docNumber, setDocNumber] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
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

      // Guardar datos adicionales en Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email,
        username,
        fullName,
        docType,
        docNumber,
        age,
        birthDate: birthDate.toISOString().split('T')[0],
        address,
      });

      Alert.alert('Te has registrado en HuellitaPetShop', 'Te has registrado correctamente!');
      navigation.navigate('Login');
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || birthDate;
    setShowDatePicker(false);
    setBirthDate(currentDate);
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

      <View>
        <Button onPress={() => setShowDatePicker(true)} title="Select Birth Date" />
        {showDatePicker && (
          <DateTimePicker
            value={birthDate}
            mode="date"
            display="default"
            onChange={onChangeDate}
          />
        )}
      </View>
      <Text style={styles.dateText}>Selected Date: {birthDate.toDateString()}</Text>

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
  dateText: {
    marginTop: 8,
    marginBottom: 12,
    textAlign: 'center',
  },
});
