import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';

type Props = {
  onNavigate: (screen: string) => void;
};

const notifications = [
  {
    id: '1',
    title: 'Scheduled Appointment',
    message: 'Your appointment has been confirmed.',
    time: 'Today, 09:30',
  },
  {
    id: '2',
    title: 'Scheduled Change',
    message: 'Your appointment time has been updated.',
    time: 'Today, 10:15',
  },
  {
    id: '3',
    title: 'Medical Updates',
    message: 'Your medical information has been updated.',
    time: 'Yesterday',
  },
  {
    id: '4',
    title: 'Appointment Reminder',
    message: 'You have an upcoming appointment.',
    time: 'Yesterday',
  },
];

export default function NotificationsScreen({ onNavigate }: Props) {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    'Hello! How can we help you?',
    'I would like to ask about my appointment.',
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([...messages, message.trim()]);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {chatOpen ? 'Chat' : 'Notifications'}
        </Text>

        <View style={{ width: 30 }} />
      </View>

      {chatOpen ? (
        <>
          <ScrollView style={styles.chatArea}>
            {messages.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.messageBubble,
                  index % 2 === 0
                    ? styles.receivedMessage
                    : styles.sentMessage,
                ]}
              >
                <Text style={styles.messageText}>{item}</Text>
              </View>
            ))}
          </ScrollView>

          <View style={styles.inputArea}>
            <TextInput
              style={styles.input}
              placeholder="Write a message..."
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity
              style={styles.sendButton}
              onPress={sendMessage}
            >
              <Text style={styles.sendText}>Send</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <Text style={styles.subtitle}>Your latest updates</Text>

          <ScrollView>
            {notifications.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.notification}
                onPress={() => setChatOpen(true)}
              >
                <View style={styles.iconCircle}>
                  <Text style={styles.icon}>●</Text>
                </View>

                <View style={styles.notificationInfo}>
                  <Text style={styles.notificationTitle}>
                    {item.title}
                  </Text>
                  <Text style={styles.notificationMessage}>
                    {item.message}
                  </Text>
                  <Text style={styles.time}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          <TouchableOpacity
            style={styles.chatButton}
            onPress={() => setChatOpen(true)}
          >
            <Text style={styles.chatButtonText}>Open Chat</Text>
          </TouchableOpacity>
        </>
      )}

      <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => onNavigate('home')}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setChatOpen(false)}>
          <Text style={styles.navText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onNavigate('profile')}>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FC',
    paddingTop: 45,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  back: {
    fontSize: 35,
    color: '#345CF5',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222222',
  },
  subtitle: {
    fontSize: 16,
    color: '#777777',
    margin: 20,
  },
  notification: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginBottom: 12,
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
  },
  iconCircle: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#E6ECFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    color: '#345CF5',
    fontSize: 20,
  },
  notificationInfo: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222222',
  },
  notificationMessage: {
    fontSize: 13,
    color: '#777777',
    marginTop: 4,
  },
  time: {
    fontSize: 11,
    color: '#999999',
    marginTop: 6,
  },
  chatButton: {
    backgroundColor: '#345CF5',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  chatButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatArea: {
    flex: 1,
    padding: 15,
  },
  messageBubble: {
    padding: 13,
    borderRadius: 15,
    marginBottom: 12,
    maxWidth: '80%',
  },
  receivedMessage: {
    backgroundColor: '#E6ECFF',
    alignSelf: 'flex-start',
  },
  sentMessage: {
    backgroundColor: '#345CF5',
    alignSelf: 'flex-end',
  },
  messageText: {
    color: '#222222',
    fontSize: 14,
  },
  inputArea: {
    flexDirection: 'row',
    padding: 12,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    backgroundColor: '#F0F2F8',
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  sendButton: {
    backgroundColor: '#345CF5',
    padding: 13,
    borderRadius: 20,
    marginLeft: 8,
  },
  sendText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 17,
    backgroundColor: '#345CF5',
  },
  navText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
});