import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

type Props = {
  onNavigate: (screen: string) => void;
};

export default function SignUpScreen({ onNavigate }: Props) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => onNavigate('welcome')}>
        <Text style={styles.back}>‹ Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>New Account</Text>
      <Text style={styles.subtitle}>
        Create your account to get started.
      </Text>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Create a password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Mobile Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter mobile number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>Date Of Birth</Text>
      <TextInput
        style={styles.input}
        placeholder="DD / MM / YYYY"
        value={birthDate}
        onChangeText={setBirthDate}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (name.trim() && email.trim() && password.trim()) {
            onNavigate('login');
          } else {
            alert('Please fill in your name, email and password.');
          }
        }}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Already have an account?{' '}
        </Text>
        <TouchableOpacity onPress={() => onNavigate('login')}>
          <Text style={styles.link}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F8FF',
    padding: 26,
    justifyContent: 'center',
  },
  back: {
    color: '#3478F6',
    fontSize: 17,
    marginBottom: 25,
  },
  title: {
    color: '#1E3765',
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#7888A5',
    fontSize: 14,
    marginTop: 8,
    marginBottom: 25,
  },
  label: {
    color: '#1E3765',
    fontWeight: '600',
    marginBottom: 7,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E8F5',
    borderRadius: 12,
    padding: 14,
    fontSize: 15,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3478F6',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 24,
  },
  footerText: {
    color: '#7888A5',
    fontSize: 13,
  },
  link: {
    color: '#3478F6',
    fontWeight: 'bold',
  },
});