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

export default function ResetPasswordScreen({ onNavigate }: Props) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleReset = () => {
    if (!password || !confirmPassword) {
      alert('Please fill in both fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    alert('Password form completed.');
    onNavigate('login');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onNavigate('login')}>
        <Text style={styles.back}>‹ Back to Log In</Text>
      </TouchableOpacity>

      <View style={styles.icon}>
        <Text style={styles.iconText}>🔒</Text>
      </View>

      <Text style={styles.title}>Set Password</Text>
      <Text style={styles.description}>
        Create a new password and confirm it below.
      </Text>

      <Text style={styles.label}>New Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Confirm Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Confirm new password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleReset}
      >
        <Text style={styles.buttonText}>Save Password</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F8FF',
    padding: 26,
  },
  back: {
    color: '#3478F6',
    fontSize: 16,
    marginBottom: 35,
  },
  icon: {
    width: 76,
    height: 76,
    borderRadius: 24,
    backgroundColor: '#DCE7FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 25,
  },
  iconText: {
    fontSize: 32,
  },
  title: {
    color: '#1E3765',
    fontSize: 29,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    color: '#7888A5',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'center',
    marginTop: 12,
    marginBottom: 32,
  },
  label: {
    color: '#1E3765',
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E1E8F5',
    borderRadius: 12,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#3478F6',
    borderRadius: 12,
    padding: 17,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});