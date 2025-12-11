import { StyleSheet, View, ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function ExploreScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <ThemedText type="title" style={styles.title}>
            Explorar
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Descubre más sobre OSSO App
          </ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            📚 Tecnologías Utilizadas
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>• React Native</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Expo Router</ThemedText>
          <ThemedText style={styles.bulletPoint}>• TypeScript</ThemedText>
          <ThemedText style={styles.bulletPoint}>• React Navigation</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Expo Modules</ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            🎯 Características Disponibles
          </ThemedText>
          <ThemedText style={styles.bulletPoint}>• Sistema de temas claro/oscuro</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Navegación con Tabs</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Componentes reutilizables</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Configuración TypeScript</ThemedText>
          <ThemedText style={styles.bulletPoint}>• Build iOS y Android optimizado</ThemedText>
        </View>

        <View style={styles.card}>
          <ThemedText type="defaultSemiBold" style={styles.cardTitle}>
            💡 Para Comenzar
          </ThemedText>
          <ThemedText style={styles.cardText}>
            Todos los archivos necesarios están configurados. Solo necesitas definir qué tipo de aplicación quieres construir y empezaremos a desarrollar las funcionalidades específicas.
          </ThemedText>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
    paddingVertical: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 12,
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
  bulletPoint: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 8,
    marginBottom: 4,
  },
});