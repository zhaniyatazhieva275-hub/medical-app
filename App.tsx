import { useState } from 'react';
import { View } from 'react-native';

import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
    <View style={{ flex: 1 }}>
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
    </View>
  );
}