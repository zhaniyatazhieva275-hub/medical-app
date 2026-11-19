import { useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { useRates } from '../hooks/useRates';

const CURRENCIES = ['KZT', 'USD', 'EUR', 'RUB'];

type Props = {
  totalKzt: number;
};

export default function CurrencyCard({ totalKzt }: Props) {
  const { status, rates, updated, reload } = useRates();
  const [currency, setCurrency] = useState('USD');

  if (status === 'loading') {
    return (
      <View style={styles.card}>
        <ActivityIndicator size="large" color="#3B6FF5" />
        <Text style={styles.hint}>Валюта бағамдары жүктелуде...</Text>
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={styles.card}>
        <Text style={styles.error}>
          Валюта бағамдарын жүктеу мүмкін болмады.
          Интернетті тексеріңіз.
        </Text>

        <Pressable style={styles.retry} onPress={reload}>
          <Text style={styles.retryText}>Қайталау</Text>
        </Pressable>
      </View>
    );
  }

  const rate = rates[currency];
  const converted =
    rate !== undefined ? (totalKzt * rate).toFixed(2) : '—';

  return (
    <View style={styles.card}>
      <Text style={styles.label}>
        Жалпы медициналық шығын, {currency}
      </Text>

      <Text style={styles.value}>{converted}</Text>

      <View style={styles.chips}>
        {CURRENCIES.map((item) => (
          <Pressable
            key={item}
            onPress={() => setCurrency(item)}
            style={[
              styles.chip,
              item === currency && styles.chipActive,
            ]}
          >
            <Text
              style={[
                styles.chipText,
                item === currency && styles.chipTextActive,
              ]}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.hint}>Бастапқы сома: {totalKzt} ₸</Text>
      <Text style={styles.hint}>Жаңартылған: {updated}</Text>
      <Text style={styles.hint}>API: open.er-api.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    width: '100%',
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#6B7280',
  },
  value: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1F2A44',
    marginVertical: 10,
  },
  chips: {
    flexDirection: 'row',
    gap: 8,
    marginVertical: 12,
  },
  chip: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#F4F6FA',
  },
  chipActive: {
    backgroundColor: '#3B6FF5',
  },
  chipText: {
    color: '#374151',
  },
  chipTextActive: {
    color: '#FFFFFF',
  },
  hint: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 5,
    textAlign: 'center',
  },
  error: {
    color: '#DC2626',
    textAlign: 'center',
    marginBottom: 12,
  },
  retry: {
    backgroundColor: '#3B6FF5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  retryText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});