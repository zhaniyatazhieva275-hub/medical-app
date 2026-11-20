import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const FAVORITE_SERVICES = [
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
];

export default function FavoriteService() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Жоғарғы тақырып */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favorite Services</Text>
        <TouchableOpacity style={styles.searchIconBtn}>
          <Text style={styles.searchIcon}>🔍</Text>
        </TouchableOpacity>
      </View>

      {/* Таңдаулы қызметтер тізімі */}
      <View style={styles.content}>
        <FlatList
          data={FAVORITE_SERVICES}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={styles.infoBox}>
                <View style={styles.topRow}>
                  <Text style={styles.serviceTitle}>{item.title}</Text>
                  <TouchableOpacity>
                    <Text style={styles.heartIcon}>❤️</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.serviceCategory}>{item.category} • ⏱ {item.duration}</Text>
                <Text style={styles.servicePrice}>{item.price}</Text>
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
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#EDF1F3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 8,
    elevation: 2,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1C1E',
  },
  heartIcon: {
    fontSize: 16,
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
});