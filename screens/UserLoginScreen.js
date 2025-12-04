// screens/UserLoginScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";

export default function UserLoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleLogin = () => {
    if (!email || !pass) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos.");
      return;
    }

    Alert.alert("Inicio de sesión", "Inicio correcto.", [
      {
        text: "OK",
        onPress: () => navigation.navigate("CreateNews"), // ⬅️ AHORA FUNCIONA
      },
    ]);
  };

  return (
    <ImageBackground source={require("../assets/fondo.jpg")} style={styles.bg}>
      <View style={styles.box}>
        <Text style={styles.title}>Iniciar Sesión</Text>

        <TextInput
          placeholder="Correo"
          style={styles.input}
          placeholderTextColor="#777"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          placeholder="Contraseña"
          style={styles.input}
          placeholderTextColor="#777"
          secureTextEntry
          value={pass}
          onChangeText={setPass}
        />

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnTxt}>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.link}>Registrarse</Text>
        </TouchableOpacity>

        {/* NUEVO */}
        <TouchableOpacity onPress={() => navigation.navigate("MemberLogin")}>
          <Text style={styles.memberLink}>Unirse como miembro</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          style={{ marginTop: 15, alignSelf: "center" }}
          onPress={() => navigation.navigate("NewsFeed")}
        >
        <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0066cc" }}>
         📰 Ver noticias creadas
        </Text>
        </TouchableOpacity>


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: "center", alignItems: "center" },
  box: {
    width: "85%",
    backgroundColor: "rgba(0,0,0,0.55)",
    padding: 25,
    borderRadius: 15,
  },
  title: { fontSize: 28, color: "#fff", textAlign: "center", marginBottom: 20 },
  input: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  btn: {
    backgroundColor: "#0a84ff",
    padding: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  btnTxt: { textAlign: "center", color: "#fff", fontSize: 18 },
  link: {
    textAlign: "center",
    color: "#fff",
    marginTop: 12,
    textDecorationLine: "underline",
  },
  memberLink: {
    textAlign: "center",
    color: "#00f7ff",
    marginTop: 15,
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
