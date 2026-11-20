import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Экрандарды импорттау
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import Doctors1 from './screens/Doctors1';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <View style={styles.container}>
      {screen === 'welcome' && <WelcomeScreen onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'login' && <LoginScreen onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'signup' && <SignUpScreen onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'reset' && <ResetPasswordScreen onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'home' && <HomeScreen onNavigate={setScreen} />}

      {/* @ts-ignore */}
      {screen === 'doctors1' && <Doctors1 onNavigate={setScreen} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});