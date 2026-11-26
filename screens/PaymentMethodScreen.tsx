import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';

type Props = {
  onNavigate: (screen: string) => void;
};

export default function PaymentMethodScreen({ onNavigate }: Props) {
  const [selectedMethod, setSelectedMethod] = useState('Card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiry, setExpiry] = useState('');
  const [paymentDone, setPaymentDone] = useState(false);

  const payNow = () => {
    setPaymentDone(true);
  };

  if (paymentDone) {
    return (
      <View style={styles.successContainer}>
        <View style={styles.checkCircle}>
          <Text style={styles.check}>✓</Text>
        </View>

        <Text style={styles.successTitle}>Congratulations!</Text>
        <Text style={styles.successText}>
          Payment is successfully completed.
        </Text>

        <View style={styles.receipt}>
          <Text style={styles.receiptTitle}>Payment Details</Text>
          <Text style={styles.receiptText}>Amount: $100.00</Text>
          <Text style={styles.receiptText}>
            Method: {selectedMethod}
          </Text>
          <Text style={styles.receiptText}>Status: Successful</Text>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onNavigate('home')}
        >
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Method</Text>
        <View style={{ width: 30 }} />
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.sectionTitle}>Select Payment Method</Text>

        {['Card', 'Apple Pay', 'PayPal', 'Google Pay'].map((method) => (
          <TouchableOpacity
            key={method}
            style={[
              styles.method,
              selectedMethod === method && styles.selectedMethod,
            ]}
            onPress={() => setSelectedMethod(method)}
          >
            <Text style={styles.methodText}>{method}</Text>
            <Text style={styles.radio}>
              {selectedMethod === method ? '●' : '○'}
            </Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.sectionTitle}>Add Card</Text>

        <Text style={styles.label}>Card Number</Text>
        <TextInput
          style={styles.input}
          placeholder="0000 0000 0000 0000"
          keyboardType="number-pad"
          value={cardNumber}
          onChangeText={setCardNumber}
          maxLength={19}
        />

        <Text style={styles.label}>Card Holder</Text>
        <TextInput
          style={styles.input}
          placeholder="Card holder name"
          value={cardHolder}
          onChangeText={setCardHolder}
        />

        <Text style={styles.label}>Expiry Date</Text>
        <TextInput
          style={styles.input}
          placeholder="MM/YY"
          value={expiry}
          onChangeText={setExpiry}
          maxLength={5}
        />

        <View style={styles.amountBox}>
          <Text style={styles.amountLabel}>Total Payment</Text>
          <Text style={styles.amount}>$100.00</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={payNow}>
          <Text style={styles.buttonText}>Pay Now (Demo)</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
    backgroundColor: '#FFFFFF',
  },
  back: {
    fontSize: 35,
    color: '#345CF5',
  },
  headerTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#222222',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#222222',
    marginTop: 15,
    marginBottom: 12,
  },
  method: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E7EF',
  },
  selectedMethod: {
    borderColor: '#345CF5',
    backgroundColor: '#EEF2FF',
  },
  methodText: {
    fontSize: 15,
    color: '#333333',
  },
  radio: {
    color: '#345CF5',
    fontSize: 18,
  },
  label: {
    fontSize: 13,
    color: '#555555',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E3EC',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
  },
  amountBox: {
    backgroundColor: '#E9EEFF',
    borderRadius: 12,
    padding: 18,
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountLabel: {
    color: '#333333',
    fontSize: 15,
  },
  amount: {
    color: '#345CF5',
    fontSize: 22,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#345CF5',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  successContainer: {
    flex: 1,
    backgroundColor: '#345CF5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },
  checkCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },
  check: {
    color: '#FFFFFF',
    fontSize: 55,
  },
  successTitle: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
  },
  successText: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },
  receipt: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginTop: 30,
  },
  receiptTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222222',
  },
  receiptText: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 10,
  },
});