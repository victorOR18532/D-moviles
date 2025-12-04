import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
 
export default function CameraDemo() {
  const [facing, setFacing] = useState("front");
  const [permission, requestPermission] = useCameraPermissions();
 
  if (!permission) {
    // permiso aún no verificado
    return <View />;
  }
 
  if (!permission.granted) {
    // permiso denegado
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Necesitamos permiso para usar la cámara.
        </Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }
 
  function toggleCameraFacing() {
    setFacing((current) => (current === "front" ? "back" : "front"));
  }
 
  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} active={true} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>🔄 Cambiar cámara</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  message: {
    textAlign: "center",
    padding: 10,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 60,
    flexDirection: "row",
    backgroundColor: "transparent",
    width: "100%",
    paddingHorizontal: 60,
  },
  button: {
    flex: 1,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
});