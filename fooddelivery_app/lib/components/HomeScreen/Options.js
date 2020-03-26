import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import Colors from "../../constants/colors";

function Options(props) {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text
        style={props.selected ? styles.text : [styles.text, styles.selected]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    paddingHorizontal: 10,
    paddingVertical: 7,
    color: "white",
    backgroundColor: "#03a9f4",
    borderRadius: 20
  },
  selected: {
    backgroundColor: "white",
    color: "black"
  }
});
export default Options;
