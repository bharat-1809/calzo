import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import SignupScreen from "./lib/Screens/SignupScreen";
import HomeScreen from "./lib/Screens/HomeScreen";
AppRegistry.registerComponent("food delivery", () => App);
import { decode, encode } from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
export default function App() {
  return <HomeScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
