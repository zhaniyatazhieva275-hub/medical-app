import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  Alert,
} from 'react-native';

type Props = {
  onNavigate: (screen: string) => void;
};

type Page =
  | 'menu'
  | 'profile'
  | 'settings'
  | 'notifications'
  | 'password'
  | 'privacy'
  | 'faq'
  | 'contact';

export default function ProfileScreen({ onNavigate }: Props) {
  const [page, setPage] = useState<Page>('menu');

  const [name, setName] = useState('John Doe');
  const [phone, setPhone] = useState('+123 567 89000');
  const [email, setEmail] = useState('johndoe@example.com');
  const [birthDate, setBirthDate] = useState('');

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [notifications, setNotifications] = useState([
    true, true, true, false, false, true, false, true,
  ]);

  const [openedFaq, setOpenedFaq] = useState<number | null>(null);

  const goBack = () => {
    setPage('menu');
  };

  const logout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes, Logout',
          onPress: () => onNavigate('welcome'),
        },
      ]
    );
  };

  const saveProfile = () => {
    Alert.alert('Success', 'Profile updated successfully.');
  };

  const changePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    Alert.alert('Success', 'Password changed successfully.');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const Header = ({ title }: { title: string }) => (
    <View style={styles.header}>
      <TouchableOpacity onPress={goBack}>
        <Text style={styles.back}>‹</Text>
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={{ width: 25 }} />
    </View>
  );

  const MenuRow = ({
    icon,
    title,
    onPress,
  }: {
    icon: string;
    title: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.menuRow} onPress={onPress}>
      <Text style={styles.menuIcon}>{icon}</Text>
      <Text style={styles.menuText}>{title}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  const Field = ({
    label,
    value,
    onChangeText,
    placeholder,
    secure,
  }: {
    label: string;
    value: string;
    onChangeText: (value: string) => void;
    placeholder: string;
    secure?: boolean;
  }) => (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#9AA6BA"
        secureTextEntry={secure}
      />
    </View>
  );

  const PrimaryButton = ({
    title,
    onPress,
  }: {
    title: string;
    onPress: () => void;
  }) => (
    <TouchableOpacity style={styles.primaryButton} onPress={onPress}>
      <Text style={styles.primaryButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const notificationNames = [
    'General Notification',
    'Sound',
    'Sound Call',
    'Vibrate',
    'Special Offers',
    'Payments',
    'Promo And Discount',
    'Cashback',
  ];

  const questions = [
    'How can I book an appointment?',
    'How can I contact a doctor?',
    'How can I change my profile information?',
    'How can I reset my password?',
    'How can I cancel an appointment?',
  ];

  return (
    <View style={styles.container}>
      {page === 'menu' && (
        <>
          <Header title="My Profile" />

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileTop}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>JD</Text>
              </View>
              <Text style={styles.userName}>{name}</Text>
            </View>

            <View style={styles.menu}>
              <MenuRow
                icon="♙"
                title="Profile"
                onPress={() => setPage('profile')}
              />
              <MenuRow
                icon="♡"
                title="Favorite"
                onPress={() =>
                  Alert.alert('Favorite', 'Favorite page will be added later.')
                }
              />
              <MenuRow
                icon="▣"
                title="Payment Method"
                onPress={() =>
                  Alert.alert('Payment Method', 'Payment options will be added later.')
                }
              />
              <MenuRow
                icon="▤"
                title="Privacy Policy"
                onPress={() => setPage('privacy')}
              />
              <MenuRow
                icon="⚙"
                title="Settings"
                onPress={() => setPage('settings')}
              />
              <MenuRow
                icon="?"
                title="Help"
                onPress={() => setPage('faq')}
              />
              <MenuRow
                icon="⇥"
                title="Logout"
                onPress={logout}
              />
            </View>
          </ScrollView>
        </>
      )}

      {page === 'profile' && (
        <>
          <Header title="Profile" />
          <ScrollView contentContainerStyle={styles.form}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>JD</Text>
            </View>

            <Field
              label="Full Name"
              value={name}
              onChangeText={setName}
              placeholder="Enter your full name"
            />
            <Field
              label="Phone Number"
              value={phone}
              onChangeText={setPhone}
              placeholder="Enter phone number"
            />
            <Field
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
            />
            <Field
              label="Date Of Birth"
              value={birthDate}
              onChangeText={setBirthDate}
              placeholder="DD / MM / YYYY"
            />

            <PrimaryButton title="Update Profile" onPress={saveProfile} />
          </ScrollView>
        </>
      )}

      {page === 'settings' && (
        <>
          <Header title="Settings" />
          <View style={styles.menu}>
            <MenuRow
              icon="♧"
              title="Notification Setting"
              onPress={() => setPage('notifications')}
            />
            <MenuRow
              icon="⚿"
              title="Password Manager"
              onPress={() => setPage('password')}
            />
            <MenuRow
              icon="♙"
              title="Delete Account"
              onPress={() =>
                Alert.alert(
                  'Delete Account',
                  'Please contact support to request account deletion.'
                )
              }
            />
          </View>
        </>
      )}

      {page === 'notifications' && (
        <>
          <Header title="Notification Setting" />
          <View style={styles.notificationList}>
            {notificationNames.map((item, index) => (
              <View style={styles.notificationRow} key={item}>
                <Text style={styles.notificationText}>{item}</Text>
                <Switch
                  value={notifications[index]}
                  onValueChange={(value) => {
                    const updated = [...notifications];
                    updated[index] = value;
                    setNotifications(updated);
                  }}
                  trackColor={{ false: '#D5DDF5', true: '#3563F5' }}
                  thumbColor="#FFFFFF"
                />
              </View>
            ))}
          </View>
        </>
      )}

      {page === 'password' && (
        <>
          <Header title="Password Manager" />
          <ScrollView contentContainerStyle={styles.form}>
            <Field
              label="Current Password"
              value={currentPassword}
              onChangeText={setCurrentPassword}
              placeholder="Enter current password"
              secure
            />
            <Field
              label="New Password"
              value={newPassword}
              onChangeText={setNewPassword}
              placeholder="Enter new password"
              secure
            />
            <Field
              label="Confirm New Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm new password"
              secure
            />
            <TouchableOpacity
              onPress={() => setPage('password')}
              style={styles.forgot}
            >
              <Text style={styles.link}>Forgot Password?</Text>
            </TouchableOpacity>
            <PrimaryButton
              title="Change Password"
              onPress={changePassword}
            />
          </ScrollView>
        </>
      )}

      {page === 'privacy' && (
        <>
          <Header title="Privacy Policy" />
          <ScrollView contentContainerStyle={styles.privacyContent}>
            <Text style={styles.privacyDate}>
              Last Update: 10/11/2026
            </Text>
            <Text style={styles.privacyTitle}>Privacy Policy</Text>
            <Text style={styles.privacyText}>
              Your privacy is important to us. This policy explains how
              Medical Health Mobile App collects, uses and protects your
              personal information.
              {'\n\n'}
              1. Personal Information
              {'\n'}
              We may collect your name, phone number and email address
              when you create an account.
              {'\n\n'}
              2. Use of Information
              {'\n'}
              Your information is used to provide medical services,
              manage appointments and improve the application.
              {'\n\n'}
              3. Data Protection
              {'\n'}
              We take reasonable measures to protect your personal data
              and keep it secure.
              {'\n\n'}
              4. User Rights
              {'\n'}
              You can update your profile information and contact our
              support team if you have questions.
              {'\n\n'}
              5. Contact
              {'\n'}
              For privacy questions, please contact our Help Center.
            </Text>
          </ScrollView>
        </>
      )}

      {page === 'faq' && (
        <>
          <Header title="Help Center" />
          <ScrollView contentContainerStyle={styles.helpContent}>
            <Text style={styles.helpSubtitle}>How Can We Help You?</Text>

            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput
                placeholder="Search..."
                placeholderTextColor="#8995B8"
                style={styles.searchInput}
              />
            </View>

            <View style={styles.helpTabs}>
              <TouchableOpacity style={styles.activeHelpTab}>
                <Text style={styles.activeHelpText}>FAQ</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.inactiveHelpTab}
                onPress={() => setPage('contact')}
              >
                <Text style={styles.inactiveHelpText}>Contact Us</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.popularTitle}>Popular Topics</Text>

            {questions.map((question, index) => (
              <View style={styles.faqItem} key={question}>
                <TouchableOpacity
                  style={styles.faqQuestion}
                  onPress={() =>
                    setOpenedFaq(openedFaq === index ? null : index)
                  }
                >
                  <Text style={styles.faqText}>{question}</Text>
                  <Text style={styles.arrow}>
                    {openedFaq === index ? '⌃' : '⌄'}
                  </Text>
                </TouchableOpacity>

                {openedFaq === index && (
                  <Text style={styles.faqAnswer}>
                    Open the relevant section in your account and follow
                    the instructions shown on the screen.
                  </Text>
                )}
              </View>
            ))}
          </ScrollView>
        </>
      )}

      {page === 'contact' && (
        <>
          <Header title="Help Center" />
          <ScrollView contentContainerStyle={styles.helpContent}>
            <Text style={styles.helpSubtitle}>How Can We Help You?</Text>

            <View style={styles.searchBox}>
              <Text style={styles.searchIcon}>⌕</Text>
              <TextInput
                placeholder="Search..."
                placeholderTextColor="#8995B8"
                style={styles.searchInput}
              />
            </View>

            <View style={styles.helpTabs}>
              <TouchableOpacity
                style={styles.inactiveHelpTab}
                onPress={() => setPage('faq')}
              >
                <Text style={styles.inactiveHelpText}>FAQ</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.activeHelpTab}>
                <Text style={styles.activeHelpText}>Contact Us</Text>
              </TouchableOpacity>
            </View>

            {[
              ['☏', 'Customer Service'],
              ['◎', 'Website'],
              ['◉', 'WhatsApp'],
              ['f', 'Facebook'],
              ['◎', 'Instagram'],
            ].map(([icon, title]) => (
              <TouchableOpacity
                key={title}
                style={styles.contactRow}
                onPress={() =>
                  Alert.alert(title, 'Contact information will be added later.')
                }
              >
                <Text style={styles.contactIcon}>{icon}</Text>
                <Text style={styles.contactText}>{title}</Text>
                <Text style={styles.arrow}>⌄</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </>
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={styles.navIcon}>⌂</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Messages', 'Messages page will be added later.')}
        >
          <Text style={styles.navIcon}>☏</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setPage('menu')}>
          <Text style={styles.navActive}>♙</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Calendar', 'Calendar page will be added later.')}
        >
          <Text style={styles.navIcon}>▦</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 58,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F8',
  },
  back: {
    fontSize: 32,
    color: '#3563F5',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3563F5',
  },
  profileTop: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#DCE5FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 27,
    color: '#3563F5',
    fontWeight: 'bold',
  },
  userName: {
    fontSize: 17,
    color: '#263A70',
    fontWeight: 'bold',
  },
  menu: {
    paddingHorizontal: 22,
    paddingTop: 12,
  },
  menuRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F2F8',
  },
  menuIcon: {
    color: '#3563F5',
    fontSize: 21,
    width: 38,
  },
  menuText: {
    flex: 1,
    fontSize: 15,
    color: '#526080',
  },
  arrow: {
    fontSize: 23,
    color: '#7893D8',
  },
  form: {
    padding: 24,
    paddingBottom: 35,
  },
  fieldContainer: {
    marginBottom: 19,
  },
  label: {
    fontSize: 13,
    color: '#263A70',
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#E8EDFF',
    borderRadius: 9,
    paddingHorizontal: 14,
    paddingVertical: 13,
    color: '#263A70',
    fontSize: 14,
  },
  primaryButton: {
    backgroundColor: '#3563F5',
    borderRadius: 22,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  notificationList: {
    padding: 22,
  },
  notificationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 13,
  },
  notificationText: {
    color: '#34415F',
    fontSize: 14,
  },
  forgot: {
    alignSelf: 'flex-end',
  },
  link: {
    color: '#3563F5',
    fontSize: 13,
  },
  privacyContent: {
    padding: 23,
  },
  privacyDate: {
    color: '#8995B8',
    fontSize: 11,
    marginBottom: 18,
  },
  privacyTitle: {
    color: '#3563F5',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  privacyText: {
    color: '#59627A',
    fontSize: 13,
    lineHeight: 22,
  },
  helpContent: {
    padding: 20,
  },
  helpSubtitle: {
    color: '#3563F5',
    textAlign: 'center',
    fontSize: 15,
    marginVertical: 15,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8EDFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    height: 44,
    marginBottom: 20,
  },
  searchIcon: {
    color: '#3563F5',
    fontSize: 22,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: '#263A70',
  },
  helpTabs: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  activeHelpTab: {
    flex: 1,
    backgroundColor: '#3563F5',
    padding: 12,
    borderRadius: 22,
    alignItems: 'center',
  },
  inactiveHelpTab: {
    flex: 1,
    backgroundColor: '#DCE4FF',
    padding: 12,
    borderRadius: 22,
    alignItems: 'center',
  },
  activeHelpText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  inactiveHelpText: {
    color: '#3563F5',
    fontWeight: 'bold',
  },
  popularTitle: {
    color: '#263A70',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  faqItem: {
    backgroundColor: '#EEF1FF',
    borderRadius: 12,
    marginBottom: 12,
    padding: 13,
  },
  faqQuestion: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  faqText: {
    color: '#526080',
    fontSize: 13,
    flex: 1,
  },
  faqAnswer: {
    color: '#7888A5',
    fontSize: 12,
    lineHeight: 19,
    marginTop: 12,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: '#EEF1FF',
  },
  contactIcon: {
    color: '#3563F5',
    fontSize: 22,
    width: 40,
  },
  contactText: {
    flex: 1,
    color: '#34415F',
    fontSize: 14,
  },
  bottomNav: {
    height: 62,
    backgroundColor: '#3563F5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },
  navIcon: {
    color: '#C9D5FF',
    fontSize: 25,
  },
  navActive: {
    color: '#FFFFFF',
    fontSize: 26,
  },
});