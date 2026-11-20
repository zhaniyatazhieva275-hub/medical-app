import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

const doctors = [
  {
    id: 1,
    name: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
    rating: '5.0',
    reviews: 60,
    initials: 'OT',
    color: '#E8C5B5',
  },
  {
    id: 2,
    name: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Genetics',
    rating: '4.5',
    reviews: 40,
    initials: 'AB',
    color: '#C5D9E8',
  },
  {
    id: 3,
    name: 'Dr. Sophia Martinez, Ph.D.',
    specialty: 'Cosmetic Bioengineering',
    rating: '5.0',
    reviews: 150,
    initials: 'SM',
    color: '#E8C9D8',
  },
  {
    id: 4,
    name: 'Dr. Michael Davidson, M.D.',
    specialty: 'Nano-Dermatology',
    rating: '4.8',
    reviews: 90,
    initials: 'MD',
    color: '#D5D5E8',
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState('');
  const [selectedDay, setSelectedDay] = useState(11);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('Home');

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>

          <View style={styles.welcome}>
            <Text style={styles.welcomeSmall}>Hi, Welcome Back!</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>

          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>♧</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerIcon}>⚙</Text>
          </TouchableOpacity>
        </View>

        {/* Doctors and Favorites */}
        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickIcon}>♧</Text>
            <Text style={styles.quickText}>Doctors</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickIcon}>♡</Text>
            <Text style={styles.quickText}>Favorite</Text>
          </TouchableOpacity>
        </View>

        {/* Search */}
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            placeholder="Search doctors..."
            placeholderTextColor="#8995B8"
            value={search}
            onChangeText={setSearch}
            style={styles.searchInput}
          />
        </View>

        {/* Calendar */}
        <View style={styles.calendarSection}>
          <Text style={styles.sectionTitle}>November 2026</Text>

          <View style={styles.daysRow}>
            {[
              { day: 9, name: 'MON' },
              { day: 10, name: 'TUE' },
              { day: 11, name: 'WED' },
              { day: 12, name: 'THU' },
              { day: 13, name: 'FRI' },
              { day: 14, name: 'SAT' },
            ].map((item) => (
              <TouchableOpacity
                key={item.day}
                onPress={() => setSelectedDay(item.day)}
                style={[
                  styles.dayCard,
                  selectedDay === item.day && styles.selectedDay,
                ]}
              >
                <Text
                  style={[
                    styles.dayNumber,
                    selectedDay === item.day && styles.selectedDayText,
                  ]}
                >
                  {item.day}
                </Text>
                <Text
                  style={[
                    styles.dayName,
                    selectedDay === item.day && styles.selectedDayText,
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Appointment */}
          <View style={styles.appointment}>
            <Text style={styles.appointmentTitle}>
              {selectedDay} November - Appointment
            </Text>

            <View style={styles.appointmentLine}>
              <Text style={styles.time}>10 AM</Text>

              <View style={styles.appointmentInfo}>
                <Text style={styles.doctorAppointment}>
                  Dr. Olivia Turner, M.D.
                </Text>
                <Text style={styles.appointmentDescription}>
                  Treatment and prevention of skin and photodermatitis.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Doctors List */}
        <View style={styles.doctorsSection}>
          <Text style={styles.sectionTitle}>Popular Doctors</Text>

          {filteredDoctors.map((doctor) => (
            <View key={doctor.id} style={styles.doctorCard}>
              <View
                style={[
                  styles.doctorAvatar,
                  { backgroundColor: doctor.color },
                ]}
              >
                <Text style={styles.doctorInitials}>
                  {doctor.initials}
                </Text>
              </View>

              <View style={styles.doctorDetails}>
                <Text style={styles.doctorName}>{doctor.name}</Text>
                <Text style={styles.specialty}>
                  {doctor.specialty}
                </Text>

                <View style={styles.ratingRow}>
                  <Text style={styles.rating}>★ {doctor.rating}</Text>
                  <Text style={styles.reviews}>
                    ◉ {doctor.reviews}
                  </Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => toggleFavorite(doctor.id)}
                style={styles.favoriteButton}
              >
                <Text style={styles.favoriteIcon}>
                  {favorites.includes(doctor.id) ? '♥' : '♡'}
                </Text>
              </TouchableOpacity>
            </View>
          ))}

          {filteredDoctors.length === 0 && (
            <Text style={styles.emptyText}>
              No doctors found.
            </Text>
          )}
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        {[
          { name: 'Home', icon: '⌂' },
          { name: 'Messages', icon: '☏' },
          { name: 'Profile', icon: '♙' },
          { name: 'Calendar', icon: '▦' },
        ].map((tab) => (
          <TouchableOpacity
            key={tab.name}
            style={styles.navItem}
            onPress={() => setActiveTab(tab.name)}
          >
            <Text
              style={[
                styles.navIcon,
                activeTab === tab.name && styles.activeNavIcon,
              ]}
            >
              {tab.icon}
            </Text>
            <Text
              style={[
                styles.navLabel,
                activeTab === tab.name && styles.activeNavLabel,
              ]}
            >
              {tab.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 18,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#DCE5FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#3563F5',
    fontWeight: 'bold',
    fontSize: 17,
  },
  welcome: {
    flex: 1,
    marginLeft: 12,
  },
  welcomeSmall: {
    color: '#7893D8',
    fontSize: 12,
  },
  userName: {
    color: '#252D45',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E8EDFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  headerIcon: {
    color: '#3563F5',
    fontSize: 20,
  },
  quickActions: {
    flexDirection: 'row',
    paddingHorizontal: 18,
    gap: 25,
    marginBottom: 15,
  },
  quickButton: {
    alignItems: 'center',
  },
  quickIcon: {
    fontSize: 25,
    color: '#3563F5',
  },
  quickText: {
    color: '#3563F5',
    fontSize: 12,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EDFF',
    borderRadius: 25,
    marginHorizontal: 18,
    paddingHorizontal: 15,
    height: 45,
  },
  searchIcon: {
    fontSize: 25,
    color: '#3563F5',
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#252D45',
  },
  calendarSection: {
    backgroundColor: '#DCE4FF',
    marginTop: 18,
    padding: 18,
  },
  sectionTitle: {
    color: '#263A70',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dayCard: {
    backgroundColor: '#FFFFFF',
    width: '15%',
    paddingVertical: 12,
    borderRadius: 15,
    alignItems: 'center',
  },
  selectedDay: {
    backgroundColor: '#3563F5',
  },
  dayNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263A70',
  },
  dayName: {
    fontSize: 10,
    marginTop: 4,
    color: '#263A70',
  },
  selectedDayText: {
    color: '#FFFFFF',
  },
  appointment: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 18,
    marginTop: 18,
  },
  appointmentTitle: {
    color: '#3563F5',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 15,
  },
  appointmentLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  time: {
    color: '#7893D8',
    fontSize: 12,
    marginRight: 12,
  },
  appointmentInfo: {
    flex: 1,
    backgroundColor: '#DCE4FF',
    padding: 12,
    borderRadius: 12,
  },
  doctorAppointment: {
    color: '#3563F5',
    fontWeight: 'bold',
    fontSize: 13,
  },
  appointmentDescription: {
    color: '#526080',
    fontSize: 11,
    marginTop: 4,
  },
  doctorsSection: {
    padding: 18,
  },
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DCE4FF',
    padding: 10,
    borderRadius: 18,
    marginBottom: 12,
  },
  doctorAvatar: {
    width: 53,
    height: 53,
    borderRadius: 27,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doctorInitials: {
    color: '#34456B',
    fontSize: 16,
    fontWeight: 'bold',
  },
  doctorDetails: {
    flex: 1,
    marginLeft: 10,
  },
  doctorName: {
    color: '#3563F5',
    fontSize: 12,
    fontWeight: 'bold',
  },
  specialty: {
    color: '#59627A',
    fontSize: 10,
    marginTop: 3,
  },
  ratingRow: {
    flexDirection: 'row',
    marginTop: 5,
    gap: 12,
  },
  rating: {
    color: '#3563F5',
    fontSize: 11,
  },
  reviews: {
    color: '#3563F5',
    fontSize: 11,
  },
  favoriteButton: {
    padding: 8,
  },
  favoriteIcon: {
    color: '#3563F5',
    fontSize: 24,
  },
  emptyText: {
    color: '#7893D8',
    textAlign: 'center',
    padding: 20,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#3563F5',
    paddingVertical: 12,
    paddingBottom: 18,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    fontSize: 23,
    color: '#C9D5FF',
  },
  activeNavIcon: {
    color: '#FFFFFF',
  },
  navLabel: {
    color: '#C9D5FF',
    fontSize: 10,
    marginTop: 3,
  },
  activeNavLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});