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
} from "react-native";

/**
 * MemberLoginScreen - login específico para miembros
 * Props: navigation, isDark
 */
export default function MemberLoginScreen({ navigation, isDark }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const theme = {
    background: isDark ? "#05060a" : "#0f1720",
    cardOverlay: "rgba(255,255,255,0.03)",
    text: "#E6EDF3",
    primary: "#00AEEF",
    primaryGlow: "#00D5FF",
  };

  const handleMemberLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos.");
      return;
    }

    Alert.alert("Inicio de sesión miembro", "Acceso concedido.", [
      {
        text: "OK",
        onPress: () => {
          // ⬅️ Aquí está el único cambio real
          navigation.navigate("CreateNews");
        },
      },
    ]);
  };

  return (
    <ImageBackground
      source={require("../assets/fondo2.jpg")}
      style={[styles.bg, { backgroundColor: theme.background }]}
      blurRadius={1.2}
      resizeMode="cover"
    >
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <View style={styles.center}>
        <View style={[styles.card, { backgroundColor: theme.cardOverlay }]}>
          <Text style={styles.title}>Miembros - Iniciar sesión</Text>

          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            placeholderTextColor="rgba(255,255,255,0.6)"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="rgba(255,255,255,0.6)"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={[styles.primaryBtn, { backgroundColor: theme.primary }]}
            onPress={handleMemberLogin}
          >
            <Text style={styles.primaryBtnText}>Entrar como miembro</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{ marginTop: 15, alignSelf: "center" }}
            onPress={() => navigation.navigate("NewsFeed")}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold", color: "#0066cc" }}>
              📰 Ver noticias creadas
            </Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate("MemberRegister")}>
            <Text style={styles.linkText}>¿No eres miembro? Únete aquí</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 12 }} onPress={() => navigation.goBack()}>
            <Text style={[styles.backText]}>← Volver</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, width: "100%", height: "100%" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  card: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 14,
    padding: 22,
    alignItems: "stretch",
    shadowColor: "#00D5FF",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 12,
  },
  title: {
    color: "#E6EDF3",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 46,
    borderRadius: 10,
    paddingHorizontal: 14,
    marginBottom: 12,
    backgroundColor: "rgba(0,0,0,0.35)",
    color: "#fff",
    borderWidth: 1,
    borderColor: "rgba(0,180,255,0.18)",
  },
  primaryBtn: {
    height: 46,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 6,
    shadowColor: "#00D5FF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 8,
  },
  primaryBtnText: { color: "#001018", fontWeight: "800", fontSize: 16 },
  linkText: {
    color: "#B0E8FF",
    textAlign: "center",
    marginTop: 12,
    textDecorationLine: "underline",
  },
  backText: { color: "#A8CFEF", textAlign: "center" },
});
