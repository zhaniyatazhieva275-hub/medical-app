import { useEffect, useState } from 'react';
import { View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import SplashScreen from './screens/SplashScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import AppointmentScreen from './screens/AppointmentScreen';
import AddExpenseScreen from './screens/AddExpenseScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';

export type MedicalExpense = {
  id: string;
  title: string;
  category: string;
  amount: number;
};

const EXPENSES_KEY = '@medical_app_expenses';

export default function App() {
  const [screen, setScreen] = useState('splash');
  const [expenses, setExpenses] = useState<MedicalExpense[]>([]);

  useEffect(() => {
    const loadExpenses = async () => {
      try {
        const savedExpenses = await AsyncStorage.getItem(EXPENSES_KEY);

        if (savedExpenses) {
          setExpenses(JSON.parse(savedExpenses));
        }
      } catch (error) {
        console.log('Шығындарды жүктеу қатесі:', error);
      }
    };

    loadExpenses();
  }, []);

  const addExpense = async (expense: {
    title: string;
    category: string;
    amount: number;
  }) => {
    const newExpense: MedicalExpense = {
      id: Date.now().toString(),
      ...expense,
    };

    const updatedExpenses = [...expenses, newExpense];

    setExpenses(updatedExpenses);

    try {
      await AsyncStorage.setItem(
        EXPENSES_KEY,
        JSON.stringify(updatedExpenses)
      );
      setScreen('home');
    } catch (error) {
      console.log('Шығынды сақтау қатесі:', error);
    }
  };

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
        <HomeScreen
          onNavigate={setScreen}
          expenses={expenses}
        />
      )}

      {screen === 'profile' && (
        <ProfileScreen onNavigate={setScreen} />
      )}

      {screen === 'appointment' && (
        <AppointmentScreen onNavigate={setScreen} />
      )}

      {screen === 'addExpense' && (
        <AddExpenseScreen
          onBack={() => setScreen('home')}
          onSave={addExpense}
        />
      )}

      {screen === 'notifications' && (
        <NotificationsScreen onNavigate={setScreen} />
      )}

      {screen === 'payment' && (
        <PaymentMethodScreen onNavigate={setScreen} />
      )}
    </View>
  );
}