import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Project() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Proyecto del Curso</Text>
      <Text style={styles.text}>
        Estoy desarrollando una <Text style={styles.highlight}>app móvil </Text> 
        para ayudar a estudiantes a organizar sus tareas y proyectos con:
      </Text>
      <Text style={styles.list}>• ⏰ Recordatorios automáticos</Text>
      <Text style={styles.list}>• 📝 Listas de tareas</Text>
      <Text style={styles.list}>• 📊 Seguimiento del progreso</Text>
      <Text style={styles.text}>
        Además tendrá una interfaz <Text style={styles.highlight}>amigable y fácil de usar</Text>.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 25,
    backgroundColor: "#FFF8E1",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#E65100",
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 12,
    color: "#444",
    textAlign: "justify",
  },
  highlight: {
    fontWeight: "bold",
    color: "#D84315",
  },
  list: {
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 8,
    color: "#333",
  },
});
