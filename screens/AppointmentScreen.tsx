import { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

type Status = 'Complete' | 'Upcoming' | 'Cancelled';
type Page = 'list' | 'details' | 'cancel' | 'review' | 'success';

type Doctor = {
  id: number;
  name: string;
  specialty: string;
  date: string;
  time: string;
  status: Status;
};

const initialDoctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
    date: 'Mon, 24 Mar 2026',
    time: '10:00 AM',
    status: 'Complete',
  },
  {
    id: 2,
    name: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Genetics',
    date: 'Tue, 25 Mar 2026',
    time: '11:30 AM',
    status: 'Complete',
  },
  {
    id: 3,
    name: 'Dr. Sophia Martinez, Ph.D.',
    specialty: 'Cosmetic Bioengineering',
    date: 'Wed, 26 Mar 2026',
    time: '02:00 PM',
    status: 'Complete',
  },
  {
    id: 4,
    name: 'Dr. Michael Davidson, M.D.',
    specialty: 'Solar Dermatology',
    date: 'Thu, 27 Mar 2026',
    time: '03:00 PM',
    status: 'Complete',
  },
  {
    id: 5,
    name: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
    date: 'Mon, 31 Mar 2026',
    time: '10:00 AM',
    status: 'Upcoming',
  },
  {
    id: 6,
    name: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Genetics',
    date: 'Tue, 01 Apr 2026',
    time: '11:30 AM',
    status: 'Upcoming',
  },
  {
    id: 7,
    name: 'Dr. Sophia Martinez, Ph.D.',
    specialty: 'Cosmetic Bioengineering',
    date: 'Wed, 02 Apr 2026',
    time: '02:00 PM',
    status: 'Upcoming',
  },
  {
    id: 8,
    name: 'Dr. Michael Davidson, M.D.',
    specialty: 'Solar Dermatology',
    date: 'Thu, 03 Apr 2026',
    time: '03:00 PM',
    status: 'Upcoming',
  },
  {
    id: 9,
    name: 'Dr. Olivia Turner, M.D.',
    specialty: 'Dermato-Endocrinology',
    date: 'Mon, 17 Mar 2026',
    time: '10:00 AM',
    status: 'Cancelled',
  },
  {
    id: 10,
    name: 'Dr. Alexander Bennett, Ph.D.',
    specialty: 'Dermato-Genetics',
    date: 'Tue, 18 Mar 2026',
    time: '11:30 AM',
    status: 'Cancelled',
  },
  {
    id: 11,
    name: 'Dr. Sophia Martinez, Ph.D.',
    specialty: 'Cosmetic Bioengineering',
    date: 'Wed, 19 Mar 2026',
    time: '02:00 PM',
    status: 'Cancelled',
  },
  {
    id: 12,
    name: 'Dr. Michael Davidson, M.D.',
    specialty: 'Solar Dermatology',
    date: 'Thu, 20 Mar 2026',
    time: '03:00 PM',
    status: 'Cancelled',
  },
];

export default function AppointmentScreen({
  onNavigate,
}: {
  onNavigate: (screen: string) => void;
}) {
  const [doctors, setDoctors] = useState(initialDoctors);
  const [tab, setTab] = useState<Status>('Complete');
  const [page, setPage] = useState<Page>('list');
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor>(initialDoctors[0]);
  const [reason, setReason] = useState('Weather Conditions');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(5);

  const filteredDoctors = doctors.filter(item => item.status === tab);

  const updateStatus = (id: number, status: Status) => {
    setDoctors(prev =>
      prev.map(item =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const openCancel = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setReason('Weather Conditions');
    setComment('');
    setPage('cancel');
  };

  const openReview = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setComment('');
    setRating(5);
    setPage('review');
  };

  const cancelAppointment = () => {
    updateStatus(selectedDoctor.id, 'Cancelled');
    setTab('Cancelled');
    setPage('success');
  };

  const rebookAppointment = (doctor: Doctor) => {
    updateStatus(doctor.id, 'Upcoming');
    setTab('Upcoming');
    setPage('success');
  };

  const Button = ({
    title,
    onPress,
    light = false,
  }: {
    title: string;
    onPress: () => void;
    light?: boolean;
  }) => (
    <TouchableOpacity
      style={[styles.button, light && styles.lightButton]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, light && styles.lightText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );

  const BottomNav = () => (
    <View style={styles.bottomNav}>
      {[
        { name: '⌂', screen: 'home' },
        { name: '☏', screen: 'home' },
        { name: '♙', screen: 'profile' },
        { name: '▦', screen: 'appointment' },
      ].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.navItem}
          onPress={() => onNavigate(item.screen)}
        >
          <Text style={styles.navIcon}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() =>
            page === 'list' ? onNavigate('home') : setPage('list')
          }
        >
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          {page === 'cancel'
            ? 'Cancel Appointment'
            : page === 'review'
            ? 'Review'
            : page === 'details'
            ? 'Appointment Details'
            : 'All Appointment'}
        </Text>
      </View>

      {page === 'list' && (
        <>
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.heading}>All Appointment</Text>

            <View style={styles.tabs}>
              {(['Complete', 'Upcoming', 'Cancelled'] as const).map(item => (
                <TouchableOpacity
                  key={item}
                  onPress={() => setTab(item)}
                  style={[styles.tab, tab === item && styles.activeTab]}
                >
                  <Text style={[
                    styles.tabText,
                    tab === item && styles.activeTabText,
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            {filteredDoctors.map(doctor => (
              <View key={doctor.id} style={styles.card}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>Dr</Text>
                </View>

                <View style={styles.doctorInfo}>
                  <Text style={styles.doctorName}>{doctor.name}</Text>
                  <Text style={styles.specialty}>{doctor.specialty}</Text>
                  <Text style={styles.date}>{doctor.date}</Text>
                  <Text style={styles.date}>{doctor.time}</Text>

                  {tab === 'Complete' && (
                    <View style={styles.actionRow}>
                      <Button
                        title="Re-Book"
                        onPress={() => rebookAppointment(doctor)}
                      />
                      <Button
                        title="Add Review"
                        onPress={() => openReview(doctor)}
                      />
                    </View>
                  )}

                  {tab === 'Upcoming' && (
                    <View style={styles.actionRow}>
                      <Button
                        title="Details"
                        onPress={() => {
                          setSelectedDoctor(doctor);
                          setPage('details');
                        }}
                      />
                      <Button
                        title="Cancel"
                        light
                        onPress={() => openCancel(doctor)}
                      />
                    </View>
                  )}

                  {tab === 'Cancelled' && (
                    <Button
                      title="Add Review"
                      onPress={() => openReview(doctor)}
                    />
                  )}
                </View>
              </View>
            ))}
          </ScrollView>
          <BottomNav />
        </>
      )}

      {page === 'details' && (
        <>
          <ScrollView contentContainerStyle={styles.content}>
            <View style={styles.detailCard}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>Dr</Text>
              </View>
              <Text style={styles.doctorName}>{selectedDoctor.name}</Text>
              <Text style={styles.specialty}>{selectedDoctor.specialty}</Text>
              <Text style={styles.date}>Date: {selectedDoctor.date}</Text>
              <Text style={styles.date}>Time: {selectedDoctor.time}</Text>
            </View>
            <Button
              title="Cancel Appointment"
              onPress={() => openCancel(selectedDoctor)}
            />
          </ScrollView>
          <BottomNav />
        </>
      )}

      {page === 'cancel' && (
        <>
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.heading}>Cancel Appointment</Text>
            <Text style={styles.description}>
              Please select a reason for cancellation:
            </Text>

            {[
              'Rescheduling',
              'Weather Conditions',
              'Unexpected Work',
              'Others',
            ].map(item => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.reason,
                  reason === item && styles.selectedReason,
                ]}
                onPress={() => setReason(item)}
              >
                <Text style={styles.reasonText}>
                  {reason === item ? '🔘' : '◯'}  {item}
                </Text>
              </TouchableOpacity>
            ))}

            <TextInput
              style={styles.input}
              placeholder="Enter Your Reason Here..."
              multiline
              value={comment}
              onChangeText={setComment}
            />

            <Button title="Cancel Appointment" onPress={cancelAppointment} />
          </ScrollView>
          <BottomNav />
        </>
      )}

      {page === 'review' && (
        <>
          <ScrollView contentContainerStyle={styles.content}>
            <Text style={styles.heading}>Review</Text>

            <View style={styles.reviewDoctor}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>Dr</Text>
              </View>
              <Text style={styles.doctorName}>{selectedDoctor.name}</Text>
              <Text style={styles.specialty}>{selectedDoctor.specialty}</Text>

              <View style={styles.ratingRow}>
                {[1, 2, 3, 4, 5].map(number => (
                  <TouchableOpacity
                    key={number}
                    onPress={() => setRating(number)}
                  >
                    <Text style={styles.stars}>
                      {number <= rating ? '★' : '☆'}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Enter Your Comment Here..."
              multiline
              value={comment}
              onChangeText={setComment}
            />

            <Button
              title="Add Review"
              onPress={() => setPage('success')}
            />
          </ScrollView>
          <BottomNav />
        </>
      )}

      {page === 'success' && (
        <View style={styles.success}>
          <Text style={styles.check}>✓</Text>
          <Text style={styles.successTitle}>Congratulations!</Text>
          <Text style={styles.successText}>Your action is successful.</Text>
          <Button
            title="Back to Appointment"
            onPress={() => setPage('list')}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
  },
  header: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  back: {
    color: '#345CF5',
    fontSize: 32,
    marginRight: 18,
  },
  headerTitle: {
    color: '#345CF5',
    fontSize: 18,
    fontWeight: '600',
  },
  content: {
    padding: 18,
    paddingBottom: 30,
  },
  heading: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#345CF5',
    marginBottom: 18,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tab: {
    backgroundColor: '#E5EAFE',
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#345CF5',
  },
  tabText: {
    color: '#345CF5',
    fontSize: 11,
  },
  activeTabText: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#DCE5FF',
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    color: '#345CF5',
    fontWeight: 'bold',
  },
  doctorInfo: {
    flex: 1,
  },
  doctorName: {
    color: '#345CF5',
    fontSize: 12,
    fontWeight: 'bold',
  },
  specialty: {
    color: '#69738B',
    fontSize: 10,
    marginTop: 4,
  },
  date: {
    color: '#69738B',
    fontSize: 10,
    marginTop: 4,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 8,
  },
  button: {
    flex: 1,
    backgroundColor: '#345CF5',
    paddingVertical: 9,
    paddingHorizontal: 8,
    borderRadius: 22,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  lightButton: {
    backgroundColor: '#FFFFFF',
  },
  lightText: {
    color: '#345CF5',
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 22,
    alignItems: 'center',
    marginBottom: 20,
  },
  description: {
    color: '#69738B',
    fontSize: 13,
    marginBottom: 15,
  },
  reason: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 10,
  },
  selectedReason: {
    backgroundColor: '#DCE5FF',
  },
  reasonText: {
    color: '#526080',
    fontSize: 13,
  },
  input: {
    backgroundColor: '#EAF0FF',
    borderRadius: 12,
    padding: 15,
    height: 125,
    textAlignVertical: 'top',
    marginTop: 15,
    color: '#252D45',
  },
  reviewDoctor: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 18,
  },
  ratingRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  stars: {
    color: '#345CF5',
    fontSize: 25,
    marginHorizontal: 3,
  },
  success: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#345CF5',
  },
  check: {
    fontSize: 75,
    color: '#FFFFFF',
  },
  successTitle: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginVertical: 15,
  },
  successText: {
    color: '#FFFFFF',
    marginBottom: 15,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#345CF5',
    paddingVertical: 13,
    paddingBottom: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navIcon: {
    color: '#FFFFFF',
    fontSize: 23,
  },
});