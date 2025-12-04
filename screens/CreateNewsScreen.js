import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

import * as ImagePicker from "expo-image-picker";

// 🔥 IMPORTAR SOLO UNA VEZ DESDE firebaseConfig
import { db } from "../firebaseConfig";
import { ref, push } from "firebase/database";

export default function CreateNewsScreen({ navigation, route }) {
  const [tipo, setTipo] = useState("");
  const [lugar, setLugar] = useState("");
  const [direccion, setDireccion] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [evidencias, setEvidencias] = useState([]);

  // 🟢 Recibe fotos desde la cámara
  useEffect(() => {
    if (route.params?.nuevaFoto) {
      if (evidencias.length < 3) {
        setEvidencias((prev) => [...prev, route.params.nuevaFoto]);
        Alert.alert("Evidencia guardada", "La foto se agregó con éxito.");
      }
      navigation.setParams({ nuevaFoto: undefined });
    }
  }, [route.params]);

  // Permisos de cámara
  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permiso requerido", "La app necesita acceso a la cámara.");
      }
    })();
  }, []);

  const abrirCamara = () => {
    if (evidencias.length >= 3) {
      Alert.alert("Límite alcanzado", "Solo puedes agregar 3 evidencias.");
      return;
    }
    navigation.navigate("Camera");
  };

  // ⭐ Guardar noticia en Firebase
  const guardarNoticia = async () => {
    try {
      const newsRef = ref(db, "news/");

      await push(newsRef, {
        tipo,
        lugar,
        direccion,
        descripcion,
        evidencias,
        fechaPublicacion: new Date().toISOString(),
      });

      return true;
    } catch (error) {
      console.log("🔥 Error guardando noticia:", error);
      return false;
    }
  };

  const publicar = async () => {
    if (!tipo || !lugar || !direccion || !descripcion) {
      Alert.alert("Campos incompletos", "Por favor llene todos los campos.");
      return;
    }

    const ok = await guardarNoticia();

    if (ok) {
      Alert.alert("Noticia registrada", "La noticia fue publicada con éxito.", [
        {
          text: "OK",
          onPress: () => {
            setTipo("");
            setLugar("");
            setDireccion("");
            setDescripcion("");
            setEvidencias([]);
          },
        },
      ]);
    } else {
      Alert.alert("Error", "No se pudo guardar la noticia.");
    }
  };

  return (
    <ImageBackground source={require("../assets/fondo3.jpg")} style={styles.bg}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Crear Noticia</Text>

        <TextInput
          style={styles.input}
          placeholder="Tipo de noticia"
          value={tipo}
          onChangeText={setTipo}
        />

        <TextInput
          style={styles.input}
          placeholder="Dirección del lugar"
          value={lugar}
          onChangeText={setLugar}
        />

        <TextInput
          style={styles.input}
          placeholder="Hora y fecha"
          value={direccion}
          onChangeText={setDireccion}
        />

        <TextInput
          style={[styles.input, styles.descripcion]}
          placeholder="Descripción de la noticia"
          multiline
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <Text style={styles.subtitle}>Evidencias ({evidencias.length}/3)</Text>

        {evidencias.map((e, i) => (
          <View key={i} style={{ marginBottom: 10 }}>
            <Image
              source={{ uri: e }}
              style={{ width: 200, height: 200, borderRadius: 10 }}
            />
            <Text style={styles.evidenciaText}>📷 Evidencia {i + 1}</Text>
          </View>
        ))}

        {evidencias.length < 3 && (
          <TouchableOpacity style={styles.button} onPress={abrirCamara}>
            <Text style={styles.buttonText}>📸 Agregar evidencia</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity style={styles.publishButton} onPress={publicar}>
          <Text style={styles.publishText}>PUBLICAR NOTICIA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 15, alignSelf: "center" }}
          onPress={() => navigation.navigate("NewsFeed")}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0066cc" }}>
            📰 Ver noticias creadas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.backText}>⬅ Volver</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: { padding: 25, alignItems: "center" },
  title: {
    fontSize: 28,
    color: "#fff",
    marginBottom: 20,
    fontWeight: "bold",
  },
  input: {
    width: "90%",
    backgroundColor: "#ffffffcc",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  descripcion: {
    height: 120,
    textAlignVertical: "top",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "600",
  },
  evidenciaText: {
    color: "#a7ed23ff",
    fontSize: 16,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#1E90FF",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  publishButton: {
    backgroundColor: "#27AE60",
    padding: 14,
    width: "90%",
    borderRadius: 10,
    marginTop: 25,
  },
  publishText: { color: "#fff", textAlign: "center", fontSize: 18 },
  back: { marginTop: 20 },
  backText: { color: "#fff", fontSize: 16 },
});
