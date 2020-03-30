import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function SwitchScreenButton(props) {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}> {props.title} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    width: 0.38 * width,
    height: 0.058 * height,
    position: "absolute",
    borderWidth: 2,
    marginTop: 0.914 * height,
    padding: 5,
    alignSelf: "center",
    justifyContent: "center",
    elevation: 5,
    borderRadius: 70,
    borderColor: "#ffffff"
    // shadowOpacity: 0.5,
    // shadowColor: '#ffffff',
  },

  textStyle: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 19
  }
});

export default SwitchScreenButton;
