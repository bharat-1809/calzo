import React, { useState } from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";
import MainNavigator from "./lib/navigation/MainNavigator";
import HomeScreen from "./lib/Screens/HomeScreen";
import * as Font from "expo-font";
import { AppLoading } from "expo";
AppRegistry.registerComponent("food delivery", () => App);
import { decode, encode } from "base-64";
global.crypto = require("@firebase/firestore");
global.crypto.getRandomValues = byteArray => {
  for (let i = 0; i < byteArray.length; i++) {
    byteArray[i] = Math.floor(256 * Math.random());
  }
};
if (!global.btoa) {
  global.btoa = encode;
}

const getFonts = () =>
  Font.loadAsync({
    "comicSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
    "comicSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "comicSans-SemiBold": require("./assets/fonts/OpenSans-SemiBold.ttf")
  });

if (!global.atob) {
  global.atob = decode;
}
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return <MainNavigator />;
  } else {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
}


