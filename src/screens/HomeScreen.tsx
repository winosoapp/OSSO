/**
 * OSSO - Pantalla Home
 * Pantalla principal de la aplicación
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button, Card } from '../components';
import { Colors, Spacing, FontSize, FontWeight } from '../constants';
import { logger } from '../utils';

export const HomeScreen: React.FC = () => {
  const handleStartProject = () => {
    logger.info('Starting new project');
    // TODO: Navegar a creación de proyecto
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>🚀 OSSO</Text>
          <Text style={styles.subtitle}>Plataforma de Desarrollo Automatizado</Text>
        </View>

        <Card style={styles.card}>
          <Text style={styles.cardTitle}>Bienvenido</Text>
          <Text style={styles.cardText}>
            OSSO es tu asistente de desarrollo automatizado. Crea aplicaciones
            móviles con React Native y Expo de forma eficiente.
          </Text>
          <Button
            title="Crear Nuevo Proyecto"
            onPress={handleStartProject}
            fullWidth
          />
        </Card>

        <View style={styles.features}>
          <Text style={styles.featuresTitle}>Características</Text>
          
          <Card style={styles.featureCard}>
            <Text style={styles.featureIcon}>⚡</Text>
            <Text style={styles.featureTitle}>Desarrollo Rápido</Text>
            <Text style={styles.featureText}>
              Crea aplicaciones completas en minutos con IA
            </Text>
          </Card>

          <Card style={styles.featureCard}>
            <Text style={styles.featureIcon}>🎨</Text>
            <Text style={styles.featureTitle}>Diseño Consistente</Text>
            <Text style={styles.featureText}>
              Sistema de diseño profesional integrado
            </Text>
          </Card>

          <Card style={styles.featureCard}>
            <Text style={styles.featureIcon}>🔧</Text>
            <Text style={styles.featureTitle}>TypeScript</Text>
            <Text style={styles.featureText}>
              Código tipado y seguro desde el inicio
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