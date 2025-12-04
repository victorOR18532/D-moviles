import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Camera, CameraType } from "expo-camera";

export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;
  if (hasPermission === false)
    return <Text>No se pudo acceder a la cámara.</Text>;

  const tomarFoto = async () => {
    if (cameraRef) {
      const foto = await cameraRef.takePictureAsync();
      navigation.navigate("CreateNews", { nuevaFoto: foto.uri });
    }
  };

  const cambiarCamara = () => {
    setType((prev) =>
      prev === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera
        style={{ flex: 1 }}
        type={type}
        ref={(ref) => setCameraRef(ref)}
      />

      <View style={styles.botones}>
        <TouchableOpacity style={styles.btn} onPress={cambiarCamara}>
          <Text style={styles.txt}>🔄</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={tomarFoto}>
          <Text style={styles.txt}>📸</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botones: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btn: {
    backgroundColor: "#00000088",
    padding: 15,
    borderRadius: 50,
  },
  txt: {
    color: "#fff",
    fontSize: 30,
  },
});
