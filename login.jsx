import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,ImageBackground } from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    console.log('Username:', username);
    console.log('Password:', password);
    
    if (username === 'HAMILTON' && password === 'JUMBO') {
        navigation.navigate('interfaz');
      }

  };

  return (
    <ImageBackground
        source={require('./assets/1325725.png')}
        style = {styles.background}
    >
        <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={username}
        />
        <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        width: '100%', 
      },
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    color: 'white'
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
    color: 'white'
  },
  
});

export default Login;
