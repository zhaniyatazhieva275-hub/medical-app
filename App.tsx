import { useState } from 'react';
import { View } from 'react-native';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AppointmentScreen from './screens/AppointmentScreen';

export default function App() {
  const [screen, setScreen] = useState('splash');

  return (
    <View style={{ flex: 1 }}>
      {screen === 'splash' && (
        <SplashScreen onFinish={() => setScreen('welcome')} />
      )}

      {screen === 'welcome' && (
        <WelcomeScreen onNavigate={setScreen} />
      )}

      {screen === 'login' && (
        <LoginScreen onNavigate={setScreen} />
      )}

      {screen === 'signup' && (
        <SignUpScreen onNavigate={setScreen} />
      )}

      {screen === 'reset' && (
        <ResetPasswordScreen onNavigate={setScreen} />
      )}

      {screen === 'home' && (
        <HomeScreen onNavigate={setScreen} />
      )}

      {screen === 'profile' && (
        <ProfileScreen onNavigate={setScreen} />
      )}

      {screen === 'appointment' && (
        <AppointmentScreen onNavigate={setScreen} />
      )}
    </View>
  );
}