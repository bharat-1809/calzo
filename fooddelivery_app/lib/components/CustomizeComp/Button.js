import React from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  View
} from "react-native";
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
    borderWidth: 1,
    marginTop: 0.07 * height,
    paddingVertical: 8,
    paddingHorizontal: 50,
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 70,
    borderColor: "#ffffff"
  },
  textStyle: {
    alignSelf: "center",
    color: "#ffffff",
    fontSize: 20
  }
});

export default SwitchScreenButton;
