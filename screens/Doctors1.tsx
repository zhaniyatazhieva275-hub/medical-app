import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CATEGORIES = ['All', 'General', 'Cardiologist', 'Dermatologist', 'Pediatrician'];

const DOCTORS = [
  { 
    id: '1', 
    name: 'Dr. Alexander Bennett, Ph.D.', 
    specialty: 'Dermato-Genetics', 
    rating: '4.5', 
    reviews: '40',
    image: 'https://randomuser.me/api/portraits/men/32.jpg' // Аватарка
  },
  { 
    id: '2', 
    name: 'Dr. Olivia Turner, M.D.', 
    specialty: 'Dermato-Endocrinology', 
    rating: '5.0', 
    reviews: '60',
    image: 'https://randomuser.me/api/portraits/women/44.jpg' // Аватарка
  },
  { 
    id: '3', 
    name: 'Dr. Sophia Martinez, Ph.D.', 
    specialty: 'Cosmetic Bioengineering', 
    rating: '5.0', 
    reviews: '150',
    image: 'https://randomuser.me/api/portraits/women/68.jpg' // Аватарка
  },
];

export default function Doctors1({ onNavigate }: any) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы тақырып */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate && onNavigate('home')}>
          <Ionicons name="arrow-back" size={24} color="#1B1C8C" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Doctors</Text>
        <TouchableOpacity>
           <Ionicons name="options-outline" size={24} color="#1B1C8C" />
        </TouchableOpacity>
      </View>

      {/* Іздеу жолағы */}
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#A0A5BA" style={{ marginRight: 10 }} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
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
          <Text style={styles.sectionTitle}>Popular Doctors</Text>
        </View>

        <FlatList
          data={DOCTORS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.card}>
              {/* Аватарка */}
              <Image source={{ uri: item.image }} style={styles.avatar} />
              
              <View style={styles.cardInfo}>
                <Text style={styles.doctorName}>{item.name}</Text>
                <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
                <View style={styles.ratingRow}>
                  <Ionicons name="star" size={14} color="#1B1C8C" />
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Text style={styles.dot}> • </Text>
                  <Text style={styles.reviewsText}>{item.reviews}</Text>
                </View>
              </View>
              
              <Ionicons name="heart-outline" size={24} color="#1B1C8C" style={styles.heartIcon} />
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFBFF', // Ақшыл көк фон
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1B1C8C', // Негізгі көк түс
  },
  searchContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E4F5',
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1A1C1E',
  },
  categoriesContainer: {
    marginBottom: 20,
    height: 40,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#F3F4F8',
    borderRadius: 20,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedCategoryChip: {
    backgroundColor: '#1B1C8C', // Белсенді санаттың түсі
  },
  categoryText: {
    fontSize: 14,
    color: '#6E7A9A',
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
    color: '#1B1C8C',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#E3E8F8', // Figma-дағы карточка түсі
    padding: 15,
    borderRadius: 20,
    marginBottom: 15,
    alignItems: 'center',
  },
  avatar: {
    width: 65,
    height: 65,
    borderRadius: 32.5,
    marginRight: 15,
    backgroundColor: '#D1D9F0', // Сурет жүктелгенше тұратын түс
  },
  cardInfo: {
    flex: 1,
  },
  doctorName: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1B1C8C',
    marginBottom: 4,
  },
  doctorSpecialty: {
    fontSize: 12,
    color: '#6E7A9A',
    marginBottom: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#1B1C8C',
    marginLeft: 4,
  },
  dot: {
    fontSize: 14,
    color: '#6E7A9A',
  },
  reviewsText: {
    fontSize: 13,
    color: '#6E7A9A',
  },
  heartIcon: {
    padding: 5,
  }
});