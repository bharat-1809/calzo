import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SwitchScreenButton from "./Button";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const GreenButton1 = () => {
  const { designStyle, container, textStyle1 } = styles;

  return (
    <View>
      <View style={styles.container}>
        <LinearGradient
          style={designStyle}
          colors={["#4CAF50", "#2E7D32"]}
          start={[0.2, 0.1]}
          end={[0.3, 0.9]}
        >
          <SwitchScreenButton title="Next" />
        </LinearGradient>
      </View>
    </View>
  );
};
export default GreenButton1;

const styles = StyleSheet.create({
  container: {
    height: 0.2 * height,
    width: 0.7 * width
  },

  textStyle1: {
    fontSize: 12,
    color: "white",
    paddingTop: 2,
    marginHorizontal: 130,
    width: "100%"
  },
  designStyle: {
    position: "absolute",
    marginTop: 0.42 * height,
    height: 0.2 * height,
    width: 1 * width,
    elevation: 5,
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60
  }

  // designStyle: {
  //     position: "absolute",
  //     marginTop: 0.860 * height,
  //     height: 0.18 * height,
  //     width: 1 * width,
  //     elevation: 5,
  //     borderTopRightRadius: 60,
  //     borderTopLeftRadius: 60,
  //   },
});
