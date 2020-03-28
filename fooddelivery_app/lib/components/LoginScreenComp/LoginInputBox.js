import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Dimensions
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constants/colors";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function LoginInput(props) {
  return (
    <KeyboardAvoidingView
      enabled
      behavior="padding"
      keyboardVerticalOffset={10}
    >
      <View style={styles.inputBox}>
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name={props.iconName}
            size={31}
            color={Colors.loginbuttonText}
          />
        </View>
        <TextInput
          style={styles.inputText}
          placeholder={props.placeholder}
          placeholderTextColor={"#ffffff"}
          onChangeText={props.onChangeText}
          value={props.value}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: "row"
  },
  icon: {
    marginBottom: (0.023 * height),
    backgroundColor: "#ffffff",
    left: 0.1268 * width,
    alignItems: "center",
    borderRadius: 100,
    height: 0.066 * height,
    width: 0.066 * height,
    alignContent: "center",
    justifyContent: "center"
  },
  inputText: {
    marginBottom: (0.023 * height),
    backgroundColor: "rgba(255,255,255,0.16)",
    borderRadius: 70,
    width: 0.746 * width,
    height: 0.066 * height,
    fontSize: 18,
    fontFamily: 'comicSans-Regular',
    textAlign: "center",
    color: Colors.background
  }
});
export default LoginInput;
