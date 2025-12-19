/**
 * SUDO - Pantalla Home
 * Pantalla principal de la aplicación de Sudoku
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card } from '../components';
import { Colors, Spacing, FontSize, FontWeight } from '../constants';
import { logger } from '../utils';

export const HomeScreen: React.FC = () => {
  const handleStartGame = () => {
    logger.info('Starting new Sudoku game');
    // TODO: Navegar a selección de dificultad
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>🎮 SUDO</Text>
          <Text style={styles.subtitle}>Juego de Sudoku Interactivo</Text>
        </View>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Bienvenido al Sudoku</Text>
          <Text style={styles.cardText}>
            Disfruta del clásico juego de lógica. Completa el tablero con números
            del 1 al 9 sin repetir en filas, columnas o regiones 3x3.
          </Text>
          <Button
            title="Jugar Ahora"
            onPress={handleStartGame}
            fullWidth
          />
        </Card>

        <View style={styles.features}>
          <Text style={styles.featuresTitle}>Características</Text>
          
          <Card style={styles.featureCard}>
            <Text style={styles.featureIcon}>🎲</Text>
            <Text style={styles.featureTitle}>Múltiples Niveles</Text>
            <Text style={styles.featureText}>
              Desde principiante hasta experto
            </Text>
          </Card>

          <Card style={styles.featureCard}>
            <Text style={styles.featureIcon}>✅</Text>
            <Text style={styles.featureTitle}>Validación en Tiempo Real</Text>
            <Text style={styles.featureText}>
              Detecta errores mientras juegas
            </Text>
          </Card>

          <Card style={styles.featureCard}>
            <Text style={styles.featureIcon}>⏱️</Text>
            <Text style={styles.featureTitle}>Temporizador</Text>
            <Text style={styles.featureText}>
              Mide tu tiempo y mejora tu récord
            </Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundSecondary,
  },
  scrollContent: {
    padding: Spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  title: {
    fontSize: FontSize.huge,
    fontWeight: FontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  subtitle: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  card: {
    marginBottom: Spacing.lg,
  },
  cardTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  cardText: {
    fontSize: FontSize.md,
    color: Colors.textSecondary,
    lineHeight: 22,
    marginBottom: Spacing.lg,
  },
  features: {
    marginTop: Spacing.md,
  },
  featuresTitle: {
    fontSize: FontSize.xl,
    fontWeight: FontWeight.bold,
    color: Colors.text,
    marginBottom: Spacing.md,
  },
  featureCard: {
    marginBottom: Spacing.md,
    alignItems: 'center',
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: Spacing.sm,
  },
  featureTitle: {
    fontSize: FontSize.lg,
    fontWeight: FontWeight.semibold,
    color: Colors.text,
    marginBottom: Spacing.xs,
  },
  featureText: {
    fontSize: FontSize.sm,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
});

export default HomeScreen;