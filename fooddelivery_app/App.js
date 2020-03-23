import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./lib/Screens/SignupScreen";

export default function App() {
  return <SignupScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
