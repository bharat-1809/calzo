import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import LinearGradient from "expo-linear-gradient";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;


export default function GreenContainer() {
  return (
    <LinearGradient
      style={styles.designStyle}
      colors={["#4CAF50", "#2E7D32"]}
      start={[0.2, 0.1]}
      end={[0.3, 0.9]}
    ></LinearGradient>
  );
}

const styles = StyleSheet.create({
  designStyle: {
    position: "absolute",
    marginTop: 0.86 * height,
    height: 0.18 * height,
    width: 1 * width,
    elevation: 5,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60
  }
});
