import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

export default function AIAssistant({ isDark }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Mensaje del usuario
    const newMessages = [...messages, { role: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    // --- Simulación de IA o respuesta adaptativa ---
    let aiResponse = "";

    if (input.toLowerCase().includes("hola")) {
      aiResponse = "¡Hola! ¿En qué puedo ayudarte hoy?";
    } else if (input.toLowerCase().includes("sensor")) {
      aiResponse = "Tu app usa sensores del dispositivo para detectar movimiento o luz.";
    } else if (input.toLowerCase().includes("cámara")) {
      aiResponse = "Puedes acceder a la cámara desde la sección de Cámara para tomar fotos o grabar videos.";
    } else if (input.toLowerCase().includes("modo oscuro")) {
      aiResponse = "El modo oscuro se activa automáticamente según la hora o el tema del sistema.";
    } else {
      aiResponse = "Soy tu asistente IA. Puedo responder sobre sensores, cámara o modo oscuro.";
    }

    // Agregar respuesta de la IA
    setMessages([...newMessages, { role: "ai", text: aiResponse }]);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: isDark ? "#121212" : "#F5F5F5",
        padding: 10,
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          color: isDark ? "#3DDC84" : "#007AFF",
          marginBottom: 10,
          textAlign: "center",
        }}
      >
        Asistente IA
      </Text>

      <ScrollView
        style={{ flex: 1, marginBottom: 10 }}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {messages.map((msg, i) => (
          <View
            key={i}
            style={{
              alignSelf: msg.role === "user" ? "flex-end" : "flex-start",
              backgroundColor: msg.role === "user" ? "#007AFF" : "#3DDC84",
              borderRadius: 10,
              padding: 8,
              marginVertical: 4,
              maxWidth: "80%",
            }}
          >
            <Text
              style={{
                color: "white",
              }}
            >
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderTopWidth: 1,
          borderColor: "#ccc",
        }}
      >
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Escribe una pregunta..."
          placeholderTextColor={isDark ? "#888" : "#666"}
          style={{
            flex: 1,
            color: isDark ? "white" : "black",
            padding: 8,
          }}
        />
        <Button
          title="Enviar"
          color={isDark ? "#3DDC84" : "#007AFF"}
          onPress={handleSend}
        />
      </View>
    </View>
  );
}
