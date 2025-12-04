import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  StatusBar,
  Alert,
  ImageBackground,
  Platform,
} from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = Math.min(900, width - 32);
const PANEL_WIDTH = CARD_WIDTH * 0.5;

export default function AuthScreen({ isDark, navigation }) {
  // Forms
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConfirmPassword, setRegConfirmPassword] = useState("");

  const anim = useRef(new Animated.Value(0)).current; // 0 = login, 1 = register

  useEffect(() => {
    Animated.timing(anim, {
      toValue: isLogin ? 0 : 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, [isLogin]);

  const theme = {
    background: isDark ? "#07080b" : "#F3F6FF",
    card: isDark ? "#0f1720" : "#FFFFFF",
    text: isDark ? "#E6EDF3" : "#1E1E1E",
    primary: "#597CF5",
    primaryDark: "#3d5bdc",
    ghost: "rgba(255,255,255,0.06)",
  };

  // interps
  const translateXForm = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -PANEL_WIDTH],
  });

  const translateXBlue = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, PANEL_WIDTH],
  });

  // handlers
  const handleLogin = () => {
    if (!loginEmail.trim() || !loginPassword.trim()) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos.");
      return;
    }
    Alert.alert("Inicio de sesión exitoso", "Bienvenido a la aplicación.");
    // navigation.navigate('Home') // agregar cuando tengas screen home
  };

  const handleRegister = () => {
    if (
      !regName.trim() ||
      !regEmail.trim() ||
      !regPassword.trim() ||
      !regConfirmPassword.trim()
    ) {
      Alert.alert("Campos incompletos", "Por favor completa todos los campos.");
      return;
    }
    if (regPassword !== regConfirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden.");
      return;
    }
    Alert.alert("Registro exitoso", "Tu cuenta ha sido creada correctamente.", [
      {
        text: "OK",
        onPress: () => {
          setIsLogin(true);
          setRegName("");
          setRegEmail("");
          setRegPassword("");
          setRegConfirmPassword("");
        },
      },
    ]);
  };

  return (
    <ImageBackground
      source={require("../assets/fondo.jpg")}
      style={[styles.bg, { backgroundColor: theme.background }]}
      resizeMode="cover"
    >
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={theme.background}
      />

      <View style={styles.centerWrap}>
        <View style={[styles.card, { width: CARD_WIDTH, backgroundColor: theme.card }]}>
          {/* Blue left panel (animated) */}
          <Animated.View
            style={[
              styles.bluePanel,
              {
                width: PANEL_WIDTH,
                transform: [{ translateX: translateXBlue }],
                backgroundColor: theme.primary,
              },
            ]}
          >
            <Text style={styles.blueTitle}>Hello, Welcome!</Text>
            <Text style={styles.blueText}>Don't have an account?</Text>

            <TouchableOpacity
              activeOpacity={0.85}
              style={[styles.ghostButton]}
              onPress={() => setIsLogin(false)}
            >
              <Text style={styles.ghostButtonText}>Register</Text>
            </TouchableOpacity>
          </Animated.View>

          {/* Form area */}
          <View style={styles.formWrap}>
            <Animated.View
              style={[
                styles.formInner,
                {
                  width: PANEL_WIDTH * 2,
                  transform: [{ translateX: translateXForm }],
                },
              ]}
            >
              {/* REGISTER column (left half) */}
              <View style={[styles.formColumn, { width: PANEL_WIDTH }]}>
                <Text style={[styles.formTitle, { color: theme.text }]}>Registration</Text>

                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Username"
                  placeholderTextColor="#9aa"
                  value={regName}
                  onChangeText={setRegName}
                />

                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Email"
                  placeholderTextColor="#9aa"
                  keyboardType="email-address"
                  value={regEmail}
                  onChangeText={setRegEmail}
                />

                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Password"
                  placeholderTextColor="#9aa"
                  secureTextEntry
                  value={regPassword}
                  onChangeText={setRegPassword}
                />

                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Confirm Password"
                  placeholderTextColor="#9aa"
                  secureTextEntry
                  value={regConfirmPassword}
                  onChangeText={setRegConfirmPassword}
                />

                <TouchableOpacity
                  style={[styles.primaryButton, { backgroundColor: theme.primary }]}
                  onPress={handleRegister}
                >
                  <Text style={styles.primaryButtonText}>Register</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>or register with social platforms</Text>

                <View style={styles.socialRow}>
                  <TouchableOpacity style={styles.socialBtn}><Text>G</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.socialBtn}><Text>f</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.socialBtn}><Text>in</Text></TouchableOpacity>
                </View>
              </View>

              {/* LOGIN column (right half) */}
              <View style={[styles.formColumn, { width: PANEL_WIDTH }]}>
                <Text style={[styles.formTitle, { color: theme.text }]}>Login</Text>

                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Username"
                  placeholderTextColor="#9aa"
                  value={loginEmail}
                  onChangeText={setLoginEmail}
                />
                <TextInput
                  style={[styles.input, { color: theme.text }]}
                  placeholder="Password"
                  placeholderTextColor="#9aa"
                  secureTextEntry
                  value={loginPassword}
                  onChangeText={setLoginPassword}
                />

                <TouchableOpacity onPress={() => Alert.alert("Recuperar contraseña", "Función próxima...")}>
                  <Text style={[styles.forgotText, { color: theme.primaryDark }]}>Forgot Password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.primaryButton, { backgroundColor: theme.primary }]}
                  onPress={handleLogin}
                >
                  <Text style={styles.primaryButtonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>or login with social platforms</Text>

                <View style={styles.socialRow}>
                  <TouchableOpacity style={styles.socialBtn}><Text>G</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.socialBtn}><Text>f</Text></TouchableOpacity>
                  <TouchableOpacity style={styles.socialBtn}><Text>in</Text></TouchableOpacity>
                </View>
              </View>
            </Animated.View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  centerWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    height: Platform.OS === "web" ? 460 : 460,
    borderRadius: 18,
    overflow: "hidden",
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.12,
    shadowRadius: 30,
    elevation: 18,
    alignItems: "stretch",
  },
  bluePanel: {
    padding: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  blueTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  blueText: {
    color: "#fff",
    fontSize: 13,
    opacity: 0.95,
    marginBottom: 18,
    textAlign: "center",
  },
  ghostButton: {
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 26,
    borderRadius: 8,
    backgroundColor: "transparent",
    borderColor: "rgba(255,255,255,0.85)",
  },
  ghostButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 14,
  },
  formWrap: {
    flex: 1,
    justifyContent: "center",
    overflow: "hidden",
  },
  formInner: {
    flexDirection: "row",
  },
  formColumn: {
    padding: 24,
    justifyContent: "center",
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 14,
  },
  input: {
    height: 44,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    paddingHorizontal: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  forgotText: {
    textAlign: "right",
    marginBottom: 10,
    marginTop: 4,
    fontSize: 12,
  },
  primaryButton: {
    height: 44,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  primaryButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 15,
  },
  orText: {
    textAlign: "center",
    color: "#777",
    marginTop: 12,
    fontSize: 12,
  },
  socialRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  socialBtn: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: "#fff",
    marginRight: 8,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
});
