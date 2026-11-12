import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const MEDICAL_SERVICES = [
  {
    id: '1',
    title: 'MRI Scan & Checkup',
    category: 'Radiology',
    price: '$150',
    duration: '30 mins',
  },
  {
    id: '2',
    title: 'Full Blood Test',
    category: 'Laboratory',
    price: '$40',
    duration: '15 mins',
  },
  {
    id: '3',
    title: 'Skin Dermatology Consult',
    category: 'Consultation',
    price: '$80',
    duration: '45 mins',
  },
  {
    id: '4',
    title: 'Heart ECG Monitoring',
    category: 'Cardiology',
    price: '$120',
    duration: '20 mins',
  },
];

export default function Service() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы тақырып */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Medical Services</Text>
        <TouchableOpacity style={styles.searchIconBtn}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Қызметтер тізімі */}
      <View style={styles.content}>
        <FlatList
          data={MEDICAL_SERVICES}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.infoBox}>
                <Text style={styles.serviceTitle}>{item.title}</Text>
                <Text style={styles.serviceCategory}>{item.category} • ⏱ {item.duration}</Text>
                <Text style={styles.servicePrice}>{item.price}</Text>
              </View>
              <TouchableOpacity style={styles.bookButton}>
                <Text style={styles.bookButtonText}>Book</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7F8F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDF1F3',
  },
  backIcon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1C1E',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1C1E',
  },
  searchIconBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7F8F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDF1F3',
  },
  searchIcon: {
    fontSize: 16,
  },
  content: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  infoBox: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1C1E',
    marginBottom: 4,
  },
  serviceCategory: {
    fontSize: 13,
    color: '#717786',
    marginBottom: 8,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0EBE7E',
  },
  bookButton: {
    backgroundColor: '#E8F8F2',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 10,
  },
  bookButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0EBE7E',
  },
});