import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import { LinearGradient } from "expo-linear-gradient";
function Button(props) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={[Colors.square1, Colors.square2]}
        style={styles.wrapper}
        start={[0.7, 0.5]}
      >
        <Text style={styles.text}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    width: "90%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    borderRadius: 30,
    alignSelf: "center"
  },
  text: {
    color: "white",
    fontSize: 30
  }
});
export default Button;
