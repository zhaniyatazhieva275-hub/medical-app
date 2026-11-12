import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const FAVORITE_DOCTORS = [
  {
    id: '1',
    name: 'Dr. Marcus Horizon',
    specialty: 'Cardiologist',
    rating: '4.8',
    reviews: '1,245 reviews',
    hospital: 'St. Carolus Hospital',
  },
  {
    id: '2',
    name: 'Dr. Maria Elena',
    specialty: 'Psychologist',
    rating: '4.9',
    reviews: '958 reviews',
    hospital: 'General Hospital',
  },
  {
    id: '3',
    name: 'Dr. Stefi Jessi',
    specialty: 'Orthopedic',
    rating: '4.7',
    reviews: '742 reviews',
    hospital: 'Bumrungrad Hospital',
  },
];

export default function FavoriteDoctors1() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы тақырып */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorite Doctors</Text>
        <TouchableOpacity style={styles.searchIconBtn}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Сүйікті дәрігерлер тізімі */}
      <View style={styles.content}>
        <FlatList
          data={FAVORITE_DOCTORS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.avatarBox} />
              <View style={styles.infoBox}>
                <View style={styles.topRow}>
                  <Text style={styles.doctorName}>{item.name}</Text>
                  <TouchableOpacity>
                    <Text style={styles.heartIcon}>❤️</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.doctorSpecialty}>{item.specialty}</Text>
                <Text style={styles.hospitalText}>{item.hospital}</Text>
                <View style={styles.footerRow}>
                  <Text style={styles.rating}>⭐ {item.rating} <Text style={styles.reviews}>({item.reviews})</Text></Text>
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
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 2,
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1C1E',
  },
  heartIcon: {
    fontSize: 16,
  },
  doctorSpecialty: {
    fontSize: 13,
    color: '#0EBE7E',
    fontWeight: '600',
    marginBottom: 2,
  },
  hospitalText: {
    fontSize: 12,
    color: '#717786',
    marginBottom: 6,
  },
  footerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1A1C1E',
  },
  reviews: {
    fontWeight: 'normal',
    color: '#717786',
  },
});