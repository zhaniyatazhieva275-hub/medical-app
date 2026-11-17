import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

type Props = {
  onNavigate: (screen: string) => void;
};

export default function LoginScreen({ onNavigate }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onNavigate('welcome')}>
        <Text style={styles.back}>‹ Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Hello!</Text>
      <Text style={styles.subtitle}>Welcome back</Text>
      <Text style={styles.description}>
        Log in to continue to your account.
      </Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        placeholderTextColor="#9AA6BA"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        placeholderTextColor="#9AA6BA"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.forgot}
        onPress={() => onNavigate('reset')}
      >
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (email.trim() && password.trim()) {
            alert('Login screen demo');
          } else {
            alert('Please enter your email and password.');
          }
        }}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => onNavigate('signup')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    padding: 26,
    justifyContent: 'center',
  },
  back: {
    color: '#3478F6',
    fontSize: 17,
    marginBottom: 35,
  },
  title: {
    color: '#1E3765',
    fontSize: 34,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#1E3765',
    fontSize: 23,
    fontWeight: '600',
    marginTop: 8,
  },
  description: {
    color: '#7888A5',
    fontSize: 15,
    marginTop: 10,
    marginBottom: 30,
  },
  label: {
    color: '#1E3765',
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E8F5',
    borderRadius: 12,
    padding: 16,
    fontSize: 15,
    color: '#1E3765',
  },
  forgot: {
    alignSelf: 'flex-end',
    marginTop: 14,
  },
  forgotText: {
    color: '#3478F6',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#3478F6',
    borderRadius: 12,
    padding: 17,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 25,
  },
  footerText: {
    color: '#7888A5',
  },
  link: {
    color: '#3478F6',
    fontWeight: 'bold',
  },
});