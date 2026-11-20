import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';

type AddExpenseScreenProps = {
  onBack: () => void;
  onSave: (expense: {
    title: string;
    category: string;
    amount: number;
  }) => void;
};

const categories = [
  'Дәрі-дәрмек',
  'Дәрігер қабылдауы',
  'Медициналық талдау',
  'Басқа',
];

export default function AddExpenseScreen({
  onBack,
  onSave,
}: AddExpenseScreenProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSave = () => {
    const numericAmount = Number(amount.replace(',', '.'));

    if (!title.trim()) {
      Alert.alert('Ескерту', 'Шығын атауын енгізіңіз');
      return;
    }

    if (!amount.trim() || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      Alert.alert('Ескерту', 'Дұрыс соманы енгізіңіз');
      return;
    }

    onSave({
      title: title.trim(),
      category,
      amount: numericAmount,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backButton}>‹ Артқа</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Шығын қосу</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Шығын атауы</Text>
        <TextInput
          style={styles.input}
          placeholder="Мысалы: Дәрі-дәрмек"
          placeholderTextColor="#999"
          value={title}
          onChangeText={setTitle}
        />

        <Text style={styles.label}>Шығын санаты</Text>
        <View style={styles.categories}>
          {categories.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.categoryButton,
                category === item && styles.selectedCategory,
              ]}
              onPress={() => setCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  category === item && styles.selectedCategoryText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Сомасы (₸)</Text>
        <TextInput
          style={styles.input}
          placeholder="Мысалы: 2500"
          placeholderTextColor="#999"
          keyboardType="decimal-pad"
          value={amount}
          onChangeText={setAmount}
        />

        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Сақтау</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 55,
    paddingBottom: 20,
  },
  backButton: {
    color: '#3563F5',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#172B4D',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 20,
    borderRadius: 20,
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
    color: '#263858',
    marginBottom: 10,
    marginTop: 15,
  },
  input: {
    height: 52,
    borderWidth: 1,
    borderColor: '#DCE4FF',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#172B4D',
  },
  categories: {
    gap: 10,
  },
  categoryButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#F5F7FF',
    borderWidth: 1,
    borderColor: '#DCE4FF',
  },
  selectedCategory: {
    backgroundColor: '#3563F5',
    borderColor: '#3563F5',
  },
  categoryText: {
    color: '#263858',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  saveButton: {
    height: 54,
    backgroundColor: '#3563F5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});