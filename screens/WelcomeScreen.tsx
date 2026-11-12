import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

type Props = {
  onNavigate: (screen: string) => void;
};

export default function WelcomeScreen({ onNavigate }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>+</Text>
      </View>

      <Text style={styles.title}>MedCare</Text>
      <Text style={styles.subtitle}>
        Your health, our priority
      </Text>

      <View style={styles.spacer} />

      <Text style={styles.heading}>Welcome!</Text>
      <Text style={styles.description}>
        Book appointments and take care of your health with us.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => onNavigate('login')}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => onNavigate('signup')}
      >
        <Text style={styles.secondaryText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F8FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 28,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 28,
    backgroundColor: '#3478F6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 58,
    fontWeight: '300',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1E3765',
    marginTop: 18,
  },
  subtitle: {
    fontSize: 15,
    color: '#7888A5',
    marginTop: 6,
  },
  spacer: {
    height: 70,
  },
  heading: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#1E3765',
  },
  description: {
    color: '#7888A5',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 12,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#3478F6',
    width: '100%',
    padding: 17,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryButton: {
    width: '100%',
    padding: 17,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#3478F6',
    marginTop: 14,
  },
  secondaryText: {
    color: '#3478F6',
    fontWeight: 'bold',
    fontSize: 16,
  },
});