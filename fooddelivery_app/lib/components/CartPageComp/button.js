import React from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const SwitchScreenButton = props => {
  return (
    <TouchableOpacity style={styles.buttonStyle}>
      <Text style={styles.textStyle}> {props.title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    marginTop: 0.13 * height,
    paddingVertical: 8,
    paddingHorizontal: 15,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 70,
    borderColor: "#ffffff"
  },

  textStyle: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 15,
    fontFamily: 'comicSans-Regular',
  }
});

export default SwitchScreenButton;
