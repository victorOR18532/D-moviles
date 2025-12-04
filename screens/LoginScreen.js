import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";

export default function LoginScreen({ isDark }) {
  const theme = {
    background: isDark ? "#0D1117" : "#F4F6FA",
    card: isDark ? "#161B22" : "#FFFFFF",
    text: isDark ? "#E6EDF3" : "#1E1E1E",
    primary: "#007AFF",
    accent: "#3DDC84",
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/Inicio/icono.png")}
          style={styles.logo}
        />
        <Text style={[styles.title, { color: theme.text }]}>Alerta.V360</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Comunidad conectada para una vida más segura
        </Text>
      </View>

      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.primary }]}
          onPress={() => console.log("Ir a Login")}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonOutline, { borderColor: theme.primary }]}
          onPress={() => console.log("Ir a Registrar")}
        >
          <Text style={[styles.buttonOutlineText, { color: theme.primary }]}>
            Registrarse
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => console.log("Olvidó su contraseña")}
        >
          <Text style={[styles.linkText, { color: theme.primary }]}>
            ¿Olvidó su contraseña?
          </Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: theme.accent }]}
          onPress={() => console.log("Ir a Login de Moderador")}
        >
          <Text style={[styles.buttonText, { color: "#000" }]}>
            Iniciar como Moderador
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.buttonOutline, { borderColor: theme.accent }]}
          onPress={() => console.log("Ir a Registro de Moderador")}
        >
          <Text style={[styles.buttonOutlineText, { color: theme.accent }]}>
            Registrarse como Moderador
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 5,
    opacity: 0.8,
  },
  card: {
    width: "100%",
    borderRadius: 20,
    padding: 25,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonOutline: {
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: "center",
    marginVertical: 8,
  },
  buttonOutlineText: {
    fontWeight: "600",
    fontSize: 16,
  },
  linkContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  linkText: {
    fontSize: 14,
    textDecorationLine: "underline",
  },
  divider: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 15,
    opacity: 0.3,
  },
});
