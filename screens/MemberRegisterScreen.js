import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";

/**
 * MemberRegisterScreen - registro de miembro con campos:
 * nombre, apellido, correo, zona, contraseña, repetir contraseña
 */
export default function MemberRegisterScreen({ navigation, isDark }) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [zone, setZone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // validaciones
    if (
      !name.trim() ||
      !lastname.trim() ||
      !email.trim() ||
      !zone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos.");
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }

    // Al registrar mostrar alerta especial y redirigir a MemberLogin
    Alert.alert(
      "Registro completo",
      "Sus datos están siendo validados para verificar que eres una persona y que eres mayor de edad.",
      [
        {
          text: "OK",
          onPress: () => {
            // limpiar campos y volver al login de miembros
            setName("");
            setLastname("");
            setEmail("");
            setZone("");
            setPassword("");
            setConfirmPassword("");
            navigation.navigate("MemberLogin");
          },
        },
      ]
    );
  };

  return (
    <ImageBackground source={require("../assets/fondo2.jpg")} style={styles.bg} blurRadius={1.2}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <ScrollView contentContainerStyle={styles.scrollWrap}>
        <View style={styles.container}>
          <Text style={styles.title}>Unirse como miembro</Text>

          <View style={styles.formBox}>
            <TextInput
              placeholder="Nombre"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={name}
              onChangeText={setName}
              style={styles.input}
            />
            <TextInput
              placeholder="Apellido"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={lastname}
              onChangeText={setLastname}
              style={styles.input}
            />

            <TextInput
              placeholder="Correo electrónico"
              placeholderTextColor="rgba(255,255,255,0.7)"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />

            <TextInput
              placeholder="Nombre de la zona que deseas registrar"
              placeholderTextColor="rgba(255,255,255,0.7)"
              value={zone}
              onChangeText={setZone}
              style={styles.input}
            />

            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />

            <TextInput
              placeholder="Repetir Contraseña"
              placeholderTextColor="rgba(255,255,255,0.7)"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              style={styles.input}
            />

            <TouchableOpacity style={styles.registerBtn} onPress={handleRegister}>
              <Text style={styles.registerBtnText}>Registrar como miembro</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("MemberLogin")} style={{ marginTop: 12 }}>
              <Text style={styles.linkText}>Ya eres miembro? Inicia sesión</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ marginTop: 8 }} onPress={() => navigation.goBack()}>
              <Text style={styles.backText}>← Volver</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, width: "100%", height: "100%" },
  scrollWrap: { flexGrow: 1, justifyContent: "center", alignItems: "center", padding: 18 },
  container: { width: "100%", maxWidth: 520 },
  title: { color: "#E6EDF3", fontSize: 28, fontWeight: "800", marginBottom: 18, textAlign: "center" },
  formBox: {
    backgroundColor: "rgba(0,0,0,0.45)",
    borderRadius: 14,
    padding: 18,
    borderWidth: 1,
    borderColor: "rgba(0,180,255,0.12)",
  },
  input: {
    height: 46,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    backgroundColor: "rgba(255,255,255,0.03)",
    color: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0,180,255,0.12)",
  },
  registerBtn: {
    backgroundColor: "#00AEEF",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 6,
    alignItems: "center",
    shadowColor: "#00D5FF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.26,
    shadowRadius: 12,
    elevation: 10,
  },
  registerBtnText: { color: "#001018", fontWeight: "800", fontSize: 16 },
  linkText: { color: "#B0E8FF", textAlign: "center", marginTop: 10, textDecorationLine: "underline" },
  backText: { color: "#A8CFEF", textAlign: "center" },
});
