import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Options(props) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={styles.optionContainer}
      accessibilityRole="button"
    >
      <Text
        style={props.selected ? styles.text : [styles.text, styles.selected]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  optionContainer: {
    position: "relative",

    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    paddingHorizontal: 18,
    paddingVertical: 5,
    color: "white",
    backgroundColor: "#03a9f4",
    borderRadius: 20,
    fontFamily: "comicSans-Regular",
  },
  selected: {
    backgroundColor: "white",
    color: "#5d5c5c",
    fontFamily: "comicSans-Regular"
  }
});
export default Options;
