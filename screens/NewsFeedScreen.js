import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

// 🔥 Firebase
import { getDatabase, ref, onValue } from "firebase/database";

export default function NewsFeedScreen() {
  const [noticias, setNoticias] = useState([]);
  const [cargando, setCargando] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const db = getDatabase();
    const newsRef = ref(db, "news/");

    // 🟢 Escuchar en tiempo real las noticias
    const unsubscribe = onValue(newsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const lista = Object.values(data);
        setNoticias(lista);
      } else {
        setNoticias([]);
      }
      setCargando(false);
    });

    return () => unsubscribe();
  }, []);

  const renderNoticia = ({ item }) => (
    <View style={styles.card}>
      {item.evidencias?.[0] && (
        <Image source={{ uri: item.evidencias[0] }} style={styles.imagen} />
      )}

      <Text style={styles.titulo}>{item.tipo}</Text>
      <Text style={styles.desc}>{item.descripcion}</Text>

      <Text style={styles.fecha}>📍 {item.lugar}</Text>
      <Text style={styles.fecha}>🕒 {item.direccion}</Text>
      <Text style={styles.fecha}>📅 {item.fechaPublicacion?.slice(0, 10)}</Text>
    </View>
  );

  if (cargando) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#000" />
        <Text>Cargando noticias...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#f4f4f4" }}>
      <FlatList
        data={noticias}
        renderItem={renderNoticia}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 15 }}
      />

      <TouchableOpacity
        style={styles.btnBack}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.btnText}>⬅ Volver</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  imagen: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  desc: {
    fontSize: 16,
    marginBottom: 8,
  },
  fecha: {
    fontSize: 14,
    color: "#666",
  },
  btnBack: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});
