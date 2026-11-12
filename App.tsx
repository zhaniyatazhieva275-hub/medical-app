import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';

import Doctors1 from './screens/Doctors1';
import Doctors2 from './screens/Doctors2';
import FavoriteDoctors1 from './screens/FavoriteDoctors1';
import FavoriteDoctors2 from './screens/FavoriteDoctors2';
import FavoriteService from './screens/FavoriteService';
import FavoriteDoctors3 from './screens/FavoriteDoctors3';

export default function App() {
  const [screen, setScreen] = useState<string>('welcome');

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
      
      {/* @ts-ignore */}
      {screen === 'doctors2' && <Doctors2 onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'favDoctors1' && <FavoriteDoctors1 onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'favDoctors2' && <FavoriteDoctors2 onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'favService' && <FavoriteService onNavigate={setScreen} />}
      
      {/* @ts-ignore */}
      {screen === 'favDoctors3' && <FavoriteDoctors3 onNavigate={setScreen} />}
    </View>
  );
}

// Міне, осы стильдер блогы жоғалып қалған екен!
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});