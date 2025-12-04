import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function NewsDetailScreen({ route }) {
  const { news } = route.params;

  return (
    <ScrollView style={styles.container}>
      {news.image && <Image source={{ uri: news.image }} style={styles.image} />}
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.desc}>{news.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: "100%", height: 250, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  desc: { fontSize: 16, color: "#444" },
});
