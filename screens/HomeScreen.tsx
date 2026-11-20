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

import CurrencyCard from '../components/CurrencyCard';

type MedicalExpense = {
  id: string;
  title: string;
  category: string;
  amount: number;
};

type HomeScreenProps = {
  onNavigate: (screen: string) => void;
  expenses: MedicalExpense[];
};

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

export default function HomeScreen({
  onNavigate,
  expenses,
}: HomeScreenProps) {
  const [search, setSearch] = useState('');
  const [selectedDay, setSelectedDay] = useState(11);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [activeTab, setActiveTab] = useState('Home');

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()) ||
    doctor.specialty.toLowerCase().includes(search.toLowerCase())
  );

  const totalMedicalExpenses = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
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
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
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

        <View style={styles.quickActions}>
          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickIcon}>♧</Text>
            <Text style={styles.quickText}>Doctors</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.quickButton}>
            <Text style={styles.quickIcon}>♡</Text>
            <Text style={styles.quickText}>Favorite</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.quickButton}
            onPress={() => onNavigate('addExpense')}
          >
            <Text style={styles.quickIcon}>＋</Text>
            <Text style={styles.quickText}>Add expense</Text>
          </TouchableOpacity>
        </View>

        {/* Medical expenses */}
        <View style={styles.expensesSection}>
          <View style={styles.expensesHeader}>
            <Text style={styles.expensesTitle}>Medical Expenses</Text>

            <TouchableOpacity
              style={styles.addExpenseButton}
              onPress={() => onNavigate('addExpense')}
            >
              <Text style={styles.addExpenseButtonText}>+ Add</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.totalCard}>
            <Text style={styles.totalLabel}>Total medical expenses</Text>
            <Text style={styles.totalAmount}>
              {totalMedicalExpenses.toLocaleString('ru-RU')} ₸
            </Text>
            <Text style={styles.totalDescription}>
              {expenses.length} expense(s) added
            </Text>
          </View>

          {expenses.length > 0 ? (
            <View style={styles.expenseList}>
              {expenses.map((expense) => (
                <View key={expense.id} style={styles.expenseItem}>
                  <View style={styles.expenseIcon}>
                    <Text style={styles.expenseIconText}>✚</Text>
                  </View>

                  <View style={styles.expenseDetails}>
                    <Text style={styles.expenseName}>
                      {expense.title}
                    </Text>
                    <Text style={styles.expenseCategory}>
                      {expense.category}
                    </Text>
                  </View>

                  <Text style={styles.expenseAmount}>
                    {expense.amount.toLocaleString('ru-RU')} ₸
                  </Text>
                </View>
              ))}
            </View>
          ) : (
            <View style={styles.emptyExpenses}>
              <Text style={styles.emptyExpensesText}>
                No expenses yet.
              </Text>
              <Text style={styles.emptyExpensesDescription}>
                Add your first medical expense.
              </Text>
            </View>
          )}

          <View style={styles.currencySection}>
            <Text style={styles.currencyTitle}>
              Currency conversion
            </Text>
            <CurrencyCard totalKzt={totalMedicalExpenses} />
          </View>
        </View>

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
                  {favorites.includes(doctor.id) ? '♥️' : '♡'}
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
            onPress={() => {
              setActiveTab(tab.name);

              if (tab.name === 'Profile') {
                onNavigate('profile');
              }

              if (tab.name === 'Calendar') {
                onNavigate('appointment');
              }
            }}
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
  expensesSection: {
    marginHorizontal: 18,
    marginBottom: 18,
  },
  expensesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  expensesTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#263A70',
  },
  addExpenseButton: {
    backgroundColor: '#3563F5',
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 12,
  },
  addExpenseButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 13,
  },
  totalCard: {
    backgroundColor: '#3563F5',
    borderRadius: 18,
    padding: 18,
    marginBottom: 12,
  },
  totalLabel: {
    color: '#DCE4FF',
    fontSize: 13,
  },
  totalAmount: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 8,
  },
  totalDescription: {
    color: '#DCE4FF',
    fontSize: 12,
    marginTop: 5,
  },
  expenseList: {
    backgroundColor: '#F5F7FF',
    borderRadius: 16,
    paddingHorizontal: 12,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8FF',
  },
  expenseIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#DCE4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  expenseIconText: {
    color: '#3563F5',
    fontSize: 20,
  },
  expenseDetails: {
    flex: 1,
    marginLeft: 10,
  },
  expenseName: {
    color: '#263A70',
    fontWeight: 'bold',
    fontSize: 13,
  },
  expenseCategory: {
    color: '#8995B8',
    fontSize: 11,
    marginTop: 4,
  },
  expenseAmount: {
    color: '#3563F5',
    fontSize: 13,
    fontWeight: 'bold',
  },
  emptyExpenses: {
    backgroundColor: '#F5F7FF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  emptyExpensesText: {
    color: '#263A70',
    fontWeight: 'bold',
    fontSize: 14,
  },
  emptyExpensesDescription: {
    color: '#8995B8',
    fontSize: 12,
    marginTop: 5,
  },
  currencySection: {
    marginTop: 18,
  },
  currencyTitle: {
    color: '#263A70',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
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