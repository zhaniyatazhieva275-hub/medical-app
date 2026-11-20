<<<<<<< HEAD
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

// Экрандарды импорттау
=======
import { useState } from 'react';
import { View } from 'react-native';

>>>>>>> fc85d385b840503fef3062eda0f7f84d420fc73e
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
<<<<<<< HEAD
import HomeScreen from './screens/HomeScreen';
import Doctors1 from './screens/Doctors1';
=======
>>>>>>> fc85d385b840503fef3062eda0f7f84d420fc73e

export default function App() {
  const [screen, setScreen] = useState('welcome');

  return (
<<<<<<< HEAD
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
=======
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
>>>>>>> fc85d385b840503fef3062eda0f7f84d420fc73e
