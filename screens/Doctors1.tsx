import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const CATEGORIES = ['All', 'General', 'Cardiologist', 'Dermatologist', 'Pediatrician'];

const DOCTORS = [
  { 
    id: '1', 
    name: 'Dr. Marcus Horizon', 
    specialty: 'Cardiologist', 
    rating: '4.8', 
    reviews: '1,245',
    distance: '800m away',
    availability: 'Available Today'
  },
  { 
    id: '2', 
    name: 'Dr. Maria Elena', 
    specialty: 'Psychologist', 
    rating: '4.9', 
    reviews: '958',
    distance: '1.5km away',
    availability: 'Available Tomorrow'
  },
  { 
    id: '3', 
    name: 'Dr. Stefi Jessi', 
    specialty: 'Orthopedic', 
    rating: '4.7', 
    reviews: '742',
    distance: '2.0km away',
    availability: 'Available Today'
  },
];

export default function Doctors1() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы тақырып */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Location</Text>
          <Text style={styles.location}>Seattle, USA 📍</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Іздеу жолағы */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search doctor, drugs, articles..."
          placeholderTextColor="#A0A5BA"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Санаттар (Categories) */}
      <View style={styles.categoriesContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATEGORIES}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.categoryChip,
                selectedCategory === item && styles.selectedCategoryChip,
              ]}
              onPress={() => setSelectedCategory(item)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === item && styles.selectedCategoryText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Дәрігерлер тізімі */}
      <View style={styles.listContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Top Doctors</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={DOCTORS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.avatarPlaceholder} />
              <View style={styles.cardInfo}>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
                <View style={styles.ratingRow}>
                  <Text style={styles.ratingText}>⭐ {item.rating}</Text>
                  <Text style={styles.distanceText}> • 📍 {item.distance}</Text>
                </View>
                <Text style={styles.availabilityText}>{item.availability}</Text>
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
  greeting: {
    fontSize: 12,
    color: '#717786',
  },
  location: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1C1E',
    marginTop: 2,
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7F8F9',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDF1F3',
  },
  notificationIcon: {
    fontSize: 18,
  },
  searchContainer: {
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#F7F8F9',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 14,
    color: '#1A1C1E',
    borderWidth: 1,
    borderColor: '#EDF1F3',
  },
  categoriesContainer: {
    marginBottom: 20,
    height: 40,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F7F8F9',
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EDF1F3',
  },
  selectedCategoryChip: {
    backgroundColor: '#0EBE7FF', // Фигма дизайнындағы негізгі жасыл не көк түс
  },
  categoryText: {
    fontSize: 14,
    color: '#717786',
    fontWeight: '500',
  },
  selectedCategoryText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1C1E',
  },
  seeAllText: {
    fontSize: 14,
    color: '#0EBE7E',
    fontWeight: '600',
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
  avatarPlaceholder: {
    width: 70,
    height: 70,
    borderRadius: 12,
    backgroundColor: '#E8ECEF',
    marginRight: 15,
  },
  cardInfo: {
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
    color: '#717786',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFC107',
  },
  distanceText: {
    fontSize: 12,
    color: '#717786',
  },
  availabilityText: {
    fontSize: 11,
    color: '#0EBE7E',
    fontWeight: '600',
  },
});