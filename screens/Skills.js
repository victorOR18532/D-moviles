import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Skills() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>💡 Mis Habilidades</Text>
      <Text style={styles.skill}>✅ Programación web</Text>
      <Text style={styles.skill}>✅ Diseño de páginas (Frontend)</Text>
      <Text style={styles.skill}>✅ Liderazgo y trabajo en equipo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 30,
    backgroundColor: "#E8F5E9",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2E7D32",
    alignSelf: "center",
  },
  skill: {
    fontSize: 18,
    marginBottom: 10,
    color: "#333",
  },
});
