import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function Welcome() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#2d2d2d', '#1a1a1a']}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.logo}>🦴 OSSO</Text>
        <Text style={styles.tagline}>Tu compañero virtual te espera</Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={() => router.push('/(auth)/signup')}
          >
            <Text style={styles.primaryButtonText}>Crear Cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.secondaryButton]}
            onPress={() => router.push('/(auth)/signin')}
          >
            <Text style={styles.secondaryButtonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 72,
    marginBottom: 10,
  },
  tagline: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 60,
    fontWeight: '600',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#FF6B35',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#FF6B35',
  },
  secondaryButtonText: {
    color: '#FF6B35',
    fontSize: 18,
    fontWeight: '700',
  },
});