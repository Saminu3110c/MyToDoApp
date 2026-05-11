import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.card}>
        <Text style={styles.heading}>Welcome to MyToDoApp</Text>
        <Text style={styles.subheading}>
          A friendly place to organize your day, learn mobile app basics, and build good habits.
        </Text>

        <View style={styles.featureList}>
          <Text style={styles.featureItem}>• Add tasks quickly</Text>
          <Text style={styles.featureItem}>• Keep today focused</Text>
          <Text style={styles.featureItem}>• Track progress with confidence</Text>
        </View>

        <Pressable style={styles.button} onPress={() => null}>
          <Text style={styles.buttonText}>Start Exploring</Text>
        </Pressable>
      </View>

      <Text style={styles.footer}>
        Tip: Tap the button to begin building your first todo list.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f2f4ff',
    padding: 24,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 24,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: '#1a1f43',
    marginBottom: 12,
  },
  subheading: {
    fontSize: 16,
    lineHeight: 24,
    color: '#5f6d8b',
    marginBottom: 22,
  },
  featureList: {
    marginBottom: 30,
  },
  featureItem: {
    fontSize: 16,
    color: '#2e3c66',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#4d6cff',
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
  footer: {
    marginTop: 24,
    textAlign: 'center',
    color: '#8c97b3',
    fontSize: 14,
  },
});
