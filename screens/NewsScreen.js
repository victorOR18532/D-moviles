import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    try {
      const stored = await AsyncStorage.getItem("news");
      if (stored) {
        setNews(JSON.parse(stored));
      }
    } catch (error) {
      console.log("Error loading news:", error);
    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("NewsDetail", { news: item })}
    >
      {item.image && (
        <Image source={{ uri: item.image }} style={styles.image} />
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text numberOfLines={2} style={styles.desc}>{item.description}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Noticias Publicadas</Text>

      {news.length === 0 ? (
        <Text style={styles.empty}>No hay noticias registradas aún.</Text>
      ) : (
        <FlatList
          data={news}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 20 },
  card: {
    backgroundColor: "#f1f1f1",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  image: { width: "100%", height: 180, borderRadius: 10, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  desc: { fontSize: 14, color: "#555" },
  empty: {
    fontSize: 16,
    color: "#888",
    marginTop: 20,
    textAlign: "center",
  },
});
