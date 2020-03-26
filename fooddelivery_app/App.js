import React from "react";
import {
  StyleSheet,
  Text,
  View
} from "react-native";
import MainNavigator from './lib/navigation/MainNavigator';

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