import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const height = Dimensions.get("window").height;

function ConCircle() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <View style={styles.circle3}>
            <LinearGradient
              style={styles.avatarGradient}
              colors={["#2196f3", "#0d47a1"]}
            >
            </LinearGradient>
          </View>
        </View>
      </View>
    </View>
  );
}
export default ConCircle;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingBottom: 100,
    // position: "absolute",
    // alignContent: "center",
    // alignItems: "center",
    // bottom: (0.672 * height),
    // left:  -(0.106 * height),
  },
  circle1: {
    height: 0.428 * height,
    width: 0.428 * height,
    borderRadius: 500,
    backgroundColor: "#03a9f4",
    justifyContent: "center",
    elevation: 10,
  },
  circle2: {
    height: 0.331 * height,
    width: 0.331 * height,
    borderRadius: 200,
    backgroundColor: "#29b6f6",
    justifyContent: "center",
    alignSelf: "center",
  },
  circle3: {
    height: 0.236 * height,
    width: 0.236 * height,
    borderRadius: 200,
    backgroundColor: "#4fc3f7",
    justifyContent: "center",
    alignSelf: "center",
  },
  avatarGradient: {
    height: 0.148 * height,
    width: 0.148 * height,
    borderRadius: 100,
    alignContent: "center",
    elevation: 5,
    alignSelf: "center",
  },
  circle4: {
    height: 0.148 * height,
    width: 0.148 * height,
    borderRadius: 100,
    alignContent: "center",
  }
});
