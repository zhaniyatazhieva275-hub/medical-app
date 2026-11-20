import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const CATEGORIES = ['All', 'General', 'Cardiologist', 'Dermatologist', 'Pediatrician'];

const DOCTORS_LIST = [
  { 
    id: '1', 
    name: 'Dr. Gilang Segara Bening', 
    specialty: 'Heart Specialist', 
    experience: '8 years exp',
    rating: '4.9',
    patients: '1,500+'
  },
  { 
    id: '2', 
    name: 'Dr. Shabil Chan', 
    specialty: 'General Doctor', 
    experience: '6 years exp',
    rating: '4.8',
    patients: '980+'
  },
  { 
    id: '3', 
    name: 'Dr. Mustakim', 
    specialty: 'Dermatologist', 
    experience: '5 years exp',
    rating: '4.7',
    patients: '850+'
  },
  { 
    id: '4', 
    name: 'Dr. Supriadi', 
    specialty: 'Pediatrician', 
    experience: '10 years exp',
    rating: '5.0',
    patients: '2,100+'
  },
];

export default function Doctors2() {
  const [selectedCat, setSelectedCat] = useState('All');

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы мәзір атауы */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctor Speciality</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Санаттар тізімі (Categories horizontal scroll) */}
      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.chip,
                selectedCat === item && styles.selectedChip,
              ]}
              onPress={() => setSelectedCat(item)}
            >
              <Text
                style={[
                  styles.chipText,
                  selectedCat === item && styles.selectedChipText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Негізгі дәрігерлер карточкалары */}
      <View style={styles.content}>
        <Text style={styles.resultCount}>Found 48 Doctors</Text>
        
        <FlatList
          data={DOCTORS_LIST}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.avatarBox} />
              <View style={styles.infoBox}>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
                <Text style={styles.experienceText}>{item.experience} • {item.patients} patients</Text>
                <View style={styles.footerRow}>
                  <Text style={styles.rating}>⭐ {item.rating}</Text>
                  <TouchableOpacity style={styles.bookSmallBtn}>
                    <Text style={styles.bookSmallText}>Book</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  categoriesContainer: {
    marginBottom: 20,
    height: 40,
  },
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    backgroundColor: '#F7F8F9',
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDF1F3',
  },
  selectedChip: {
    backgroundColor: '#0EBE7E',
    borderColor: '#0EBE7E',
  },
  chipText: {
    fontSize: 14,
    color: '#717786',
    fontWeight: '500',
  },
  selectedChipText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  resultCount: {
    fontSize: 14,
    color: '#717786',
    marginBottom: 15,
    fontWeight: '500',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  avatarBox: {
    width: 75,
    height: 75,
    borderRadius: 12,
    backgroundColor: '#E8ECEF',
    marginRight: 15,
  },
  infoBox: {
    flex: 1,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1C1E',
    marginBottom: 2,
  },
  doctorSpecialty: {
    fontSize: 13,
    color: '#0EBE7E',
    fontWeight: '600',
    marginBottom: 4,
  },
  experienceText: {
    fontSize: 12,
    color: '#717786',
    marginBottom: 8,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1A1C1E',
  },
  bookSmallBtn: {
    backgroundColor: '#E8F8F2',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  bookSmallText: {
    fontSize: 12,
    color: '#0EBE7E',
    fontWeight: 'bold',
  },
});