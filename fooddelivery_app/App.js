import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AppRegistry
} from "react-native";
import MainNavigator from './lib/navigation/MainNavigator';
import HomeScreen from "./lib/Screens/HomeScreen";
AppRegistry.registerComponent("food delivery", () => App);
import {
  decode,
  encode
} from "base-64";
if (!global.btoa) {
  global.btoa = encode;
}

if (!global.atob) {
  global.atob = decode;
}
export default function App() {
  return ( < MainNavigator / > );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});