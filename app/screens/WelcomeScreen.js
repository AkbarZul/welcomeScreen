import React from 'react';
import {ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import logo from '../assets/background.jpg';
import logo2 from '../assets/logo-red.png';

const WelcomeScreen = () => {
  return (
    <ImageBackground source={logo} style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo2} style={styles.logo3} />
        <Text>Welcome To Welcome Screen, just try it.</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#fc5c65',
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: '#4ecdc4',
  },
  logo3: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
});

export default WelcomeScreen;
