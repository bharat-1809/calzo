import React from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import Colors from "../../constants/colors";
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
    width: "74.6%",
    backgroundColor: Colors.primary,
    justifyContent: "center",
    alignItems: "center",
    height: 55,
    borderRadius: 40,
    alignSelf: "center",
    elevation: 4,
  },
  text: {
    color: "white",
    fontSize: 22.5,
    fontWeight: "bold",
  }
});
export default Button;
