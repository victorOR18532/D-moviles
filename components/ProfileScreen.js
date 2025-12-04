import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, Platform, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    // Cargar nombre guardado al iniciar
    const loadName = async () => {
      const stored = await AsyncStorage.getItem("userName");
      if (stored) setSavedName(stored);
    };
    loadName();
  }, []);

  const saveName = async () => {
    await AsyncStorage.setItem("userName", name);
    setSavedName(name);
    setName("");
    alert(`Nombre guardado en ${Platform.OS.toUpperCase()}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Perfil de Usuario</Text>

      {savedName ? (
        <Text style={styles.text}>Hola, {savedName} 👋</Text>
      ) : (
        <Text style={styles.text}>Aún no has guardado tu nombre</Text>
      )}

      <TextInput
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <Button title="Guardar Nombre" onPress={saveName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 20 },
  text: { fontSize: 16, marginVertical: 10 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
});
