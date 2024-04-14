import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitEnabled, setSubmitEnabled] = useState(false);

  const handleUsernameChange = (text) => {
    setUsername(text);
    if (text !== '' && password !== '') {
      setSubmitEnabled(true);
    } else {
      setSubmitEnabled(false);
    }
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text !== '' && username !== '') {
      setSubmitEnabled(true);
    } else {
      setSubmitEnabled(false);
    }
  };

  const handleSubmit = () => {
    // Here you can implement your login logic
    // For now, let's just display the entered username and password
    Alert.alert('Login', `Username: ${username}\nPassword: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./images/pngwing.com.png')} style={styles.logo} />
      <Text style={styles.heading}>Login</Text>
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={handleUsernameChange}
        placeholder="Enter your username"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Enter your password"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={[styles.button, submitEnabled ? null : styles.disabledButton]}
        onPress={handleSubmit}
        disabled={!submitEnabled}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#000',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    borderRadius:100,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width: '100%',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
