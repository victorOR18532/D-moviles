import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function AboutMe({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>👋 Sobre mí</Text>

      <Text style={styles.text}>
        Mi nombre es: <Text style={styles.highlight}>Victor Ordoñez</Text>
      </Text>
      <Text style={styles.text}>
        Estudio: <Text style={styles.highlight}>Ingeniería de Sistemas</Text>
      </Text>

      <Text style={styles.subtitle}>🎯 Intereses:</Text>
      <Text style={styles.text}>• Desarrollo de aplicaciones móviles</Text>
      <Text style={styles.text}>• Inteligencia Artificial</Text>
      <Text style={styles.text}>• Diseño de interfaces (UI/UX)</Text>
      <Text style={styles.text}>• Trabajo colaborativo en proyectos</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="✨ Ver mis habilidades"
          color="#4CAF50"
          onPress={() => navigation.navigate("Skills")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="📌 Proyecto del curso"
          color="#2196F3"
          onPress={() => navigation.navigate("Project")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F7FA",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 15,
    marginBottom: 10,
    color: "#FF9800",
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
    color: "#555",
    textAlign: "center",
  },
  highlight: {
    fontWeight: "bold",
    color: "#1976D2",
  },
  buttonContainer: {
    marginTop: 15,
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
});
