import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image , ImageBackground} from 'react-native';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const maxLoginAttempts = 3;

  useEffect(() => {
    // Después de 20 segundos, restablecer el contador de intentos
    const timer = setTimeout(() => {
      setLoginAttempts(0);
    }, 20000);

    // Limpiar el temporizador si el componente se desmonta antes de que se alcance el tiempo
    return () => clearTimeout(timer);
  }, [loginAttempts]);

  const handleLogin = () => {
    if (loginAttempts >= maxLoginAttempts) {
      alert('Has alcanzado el límite de intentos. Intenta más tarde.');
      return;
    }

    if (username === 'Hamilton' && password === 'admin') {
      setLoggedIn(true);
    } else {
      setLoginAttempts(loginAttempts + 1);
      alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <ImageBackground
      source={require('./../img/a14b3f70ba34973dfee19d4e9ed233e2.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          {loggedIn ? (
            <Text style={styles.welcomeText}>¡Bienvenido, {username}!</Text>
          ) : (
            <>
              <View style={styles.headerContainer}>
                <Image
                  source={require('./../img/Login.Meson.Rosa.png')}
                  style={styles.logoImage}
                />
              </View>

              <TextInput
                placeholder="Nombre de usuario"
                style={styles.input}
                value={username}
                onChangeText={(text) => setUsername(text)}
                editable={!loggedIn}
              />
              <TextInput
                placeholder="Contraseña"
                secureTextEntry
                style={styles.input}
                value={password}
                onChangeText={(text) => setPassword(text)}
                editable={!loggedIn}
              />
              <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loggedIn}>
                <Text style={styles.buttonText}>Iniciar Sesión</Text>
              </TouchableOpacity>
              <Text style={styles.registerText}>¿No tienes una cuenta? Regístrate</Text>
            </>
          )}
        </View>

        <Text style={styles.footerText}>"NO HAY AMOR MAS SINCERO</Text>
        <Text style={styles.footerText}>QUE EL AMOR A LA COMIDA"</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover', // Ajustar la imagen para cubrir toda la pantalla
  },
      container: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        padding: 20, 
      },
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      image: {
        width: 200,
        height: 200,
        marginBottom: 10,
      },
      input: {
        width: 275,
        height: 48,
        borderColor: '#333333',
        borderWidth: 1,
        padding: 16,
        marginBottom: 20,
        fontWeight: '700',
      },
      button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        textAlign: 'center',
      },
      LoginText: {
        fontSize: 40,
        fontWeight: '800',
        marginBottom: 50,
        justifyContent: 'center',
      },
      welcomeText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      registerText: {
        marginTop: 10,
        color: 'black',
      },
      logoImage: {
        width: 250, 
        height: 250, 
        marginBottom: 10,
      },
      footerText: {
        fontSize: 16,
        color: 'black',
        justifyContent: 'center',
      },
});

export default Login;
