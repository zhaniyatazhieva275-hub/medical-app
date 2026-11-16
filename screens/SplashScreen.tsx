import { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  onFinish: () => void;
};

export default function SplashScreen({ onFinish }: Props) {
  useEffect(() => {
    const timer = setTimeout(onFinish, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>✿</Text>
      <Text style={styles.title}>Skin Firsts</Text>
      <Text style={styles.subtitle}>Dermatology Center</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#345CF5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 75,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
  },
  subtitle: {
    color: 'white',
    fontSize: 11,
    marginTop: 8,
  },
});