import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import MainNavigator from "./lib/navigation/MainNavigator";

const getFonts = () =>
  Font.loadAsync({
    "comicSans-Regular": require('./assets/fonts/OpenSans-Regular.ttf'),
    "comicSans-Bold": require('./assets/fonts/OpenSans-Bold.ttf'),
    "comicSans-SemiBold": require('./assets/fonts/OpenSans-SemiBold.ttf'),
  });

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
