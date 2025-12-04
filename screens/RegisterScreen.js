// screens/RegisterScreen.js
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

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [pass2, setPass2] = useState("");

  const handleRegister = () => {
    if (!email || !pass || !pass2) {
      Alert.alert("Campos incompletos", "Por favor llena todos los campos.");
      return;
    }

    if (pass !== pass2) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    Alert.alert("Registro exitoso", "Tu cuenta fue creada.", [
      { text: "OK", onPress: () => navigation.navigate("Login") },
    ]);
  };

  return (
    <ImageBackground source={require("../assets/fondo2.jpg")} style={styles.bg}>
      <View style={styles.box}>
        <Text style={styles.title}>Registrarse</Text>

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
          secureTextEntry
          placeholderTextColor="#777"
          value={pass}
          onChangeText={setPass}
        />

        <TextInput
          placeholder="Repetir contraseña"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#777"
          value={pass2}
          onChangeText={setPass2}
        />

        <TouchableOpacity style={styles.btn} onPress={handleRegister}>
          <Text style={styles.btnTxt}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.link}>Ya tengo cuenta</Text>
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
});
