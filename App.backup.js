import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  // 1. Elimina 'Dimensions' de aquí
  useWindowDimensions, // 2. Importa el hook 'useWindowDimensions'
} from "react-native";

// 3. Elimina esta línea de aquí afuera
// const { width } = Dimensions.get("window");

export default function App() {
  // 4. Llama al hook DENTRO del componente
  const { width } = useWindowDimensions();

  // El resto de tu código funciona igual, pero ahora 'width' siempre estará actualizado
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Tus vistas 'card' no necesitan cambios */}
      <View style={[styles.card, { width: width * 0.9 }]}>
        <Image
          source={{ uri: "https://via.placeholder.com/300" }}
          style={styles.image}
          resizeMode="contain"
        />
        <Text style={[styles.title, { fontSize: width < 400 ? 16 : 20 }]}>
          Víctor Ordoñez
        </Text>
        <Text style={[styles.text, { fontSize: width < 400 ? 12 : 16 }]}>
          Ingeniero Multimedia apasionado por videojuegos, software y docencia.
        </Text>
      </View>

      <View style={[styles.card, { width: width * 0.9 }]}>
        <Text style={[styles.title, { fontSize: width < 400 ? 16 : 20 }]}>
          💡 Habilidades
        </Text>
        <Text style={[styles.text, { fontSize: width < 400 ? 12 : 16 }]}>
          JS, React, React Native, Unity, Python, C#, IA
        </Text>
      </View>

      <View style={[styles.card, { width: width * 0.9 }]}>
        <Text style={[styles.title, { fontSize: width < 400 ? 16 : 20 }]}>
          🚀 Proyecto
        </Text>
        <Text style={[styles.text, { fontSize: width < 400 ? 12 : 16 }]}>
          Una app de transporte exclusiva para universitarios.
        </Text>
      </View>
    </ScrollView>
  );
}

// 📌 Para que el tamaño de la fuente cambie, pasamos los estilos que dependen del 'width'
// directamente en el componente. Los estilos que no cambian se quedan aquí.
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 10,
    backgroundColor: '#f0f0f0', // Un fondo para que se vea mejor
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
    // El ancho ahora se aplica directamente en el componente
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 12,
    marginBottom: 10,
  },
  title: {
    // El fontSize ahora se aplica directamente en el componente
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  text: {
    // El fontSize ahora se aplica directamente en el componente
    textAlign: "center",
  },
});