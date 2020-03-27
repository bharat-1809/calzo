import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

import Colors from "../../constants/colors";
import { LinearGradient } from "expo-linear-gradient";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function LoginButton(props) {
  return (
    <TouchableOpacity>
      <LinearGradient
        colors={["#ffffff", "#ffffff"]}
        style={styles.button}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

// Style for "LoginButton"
const styles = StyleSheet.create({
  button: {
    width: (0.746 * width),
    height: (0.066 * height),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderRadius: 70,
    // backgroundColor: "#fc435f",
  },
  // Style for LOGIN Text
  buttonText: {
    fontSize: 22.5,
    color: Colors.loginbuttonText,
    fontFamily: 'comicSans-Bold',
  }
});
export default LoginButton;
