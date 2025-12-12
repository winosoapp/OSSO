import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>🚀 OSSO App</Text>
      <Text style={styles.subtitle}>Bienvenido a tu aplicación</Text>
      <View style={styles.card}>
        <Text style={styles.cardText}>Expo SDK 54</Text>
        <Text style={styles.cardSubtext}>React Native + TypeScript</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007AFF',
  },
  cardSubtext: {
    fontSize: 14,
    color: '#999',
    marginTop: 5,
  },
});
