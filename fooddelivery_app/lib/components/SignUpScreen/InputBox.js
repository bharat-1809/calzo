import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Colors from "../../constants/colors";

function Input(props) {
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
            size={25}
            color={Colors.primary}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder={props.placeholder}
          placeholderTextColor={Colors.primary}
          secureTextEntry={props.secureText}
          keyboardType={props.keyboardType}
          onChangeText={props.onChangeText}
          value={props.value}
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
    marginTop: "5%",
    paddingVertical: 12,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderRadius: 100,
    paddingHorizontal: 13,
    left: 42,
    zIndex: 2,
    backgroundColor: "white",
    color: Colors.primary
  },
  input: {
    marginTop: "5%",
    height: 48,
    width: "78%",
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.primary,
    color: "#404040",
    fontSize: 16,
    borderRadius: 30,
    // paddingLeft: 45,
    textAlign: "center",
    color: Colors.primary
  }
});
export default Input;
