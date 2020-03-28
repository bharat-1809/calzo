import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SignupScreen from "./lib/Screens/SignupScreen";
import LoginScreen from "./lib/Screens/LoginScreen";
import CartScreen from './lib/Screens/CartScreen'; 

export default function App() {
  return <CartScreen/>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
