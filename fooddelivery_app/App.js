import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./lib/Screens/SignupScreen";
import LoginScreen from "./lib/Screens/LoginScreen";
import SelectSizeScreen from "./lib/Screens/SelectSizeScreen";
export default function App() {
  return <LoginScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
