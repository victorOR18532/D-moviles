import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Accelerometer } from "expo-sensors";
 
export default function SensorDemo() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
 
  useEffect(() => {
    const subscription = Accelerometer.addListener(setData);
    Accelerometer.setUpdateInterval(500); // cada 0.5 segundos
    return () => subscription && subscription.remove();
  }, []);
 
  const backgroundColor =
    data.x > 0.5 ? "lightblue" : data.x < -0.5 ? "lightcoral" : "white";
 
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor,
      }}
    >
      <Text style={{ fontSize: 20, marginBottom: 10 }}>📱 Acelerómetro</Text>
      <Text>X: {data.x.toFixed(2)}</Text>
      <Text>Y: {data.y.toFixed(2)}</Text>
      <Text>Z: {data.z.toFixed(2)}</Text>
      <Text style={{ marginTop: 20 }}>
          Gira el dispositivo para cambiar el color de fondo.
      </Text>
    </View>
  );
}