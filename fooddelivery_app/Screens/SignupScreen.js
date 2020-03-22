import React from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";
import Colors from "../constants/colors";

import InputBox from "../components/InputBox";
import Button from "../components/Button";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function SignupScreen(props) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.shapeWrapper}>
        <View style={styles.square1}></View>
        <View style={styles.square2}></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}>Create account</Text>
        <KeyboardAvoidingView style={styles.inputContainer}>
          <InputBox
            placeholder="Name"
            iconName="account"
            secureText={false}
            keyboardType="default"
          />
          <InputBox
            placeholder="Enrollment Number"
            iconName="format-list-bulleted"
            secureText={false}
            keyboardType="visible-password"
          />
          <InputBox
            placeholder="Phone Number"
            iconName="phone"
            secureText={false}
            keyboardType="numeric"
          />
          <InputBox
            placeholder="Email"
            iconName="email"
            secureText={false}
            keyboardType="email-address"
          />
          <InputBox placeholder="password" iconName="lock" secureText={true} />
        </KeyboardAvoidingView>
      </View>
      <View style={styles.buttonContainer}>
        <Button text="SIGN UP" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  square1: {
    position: "absolute",
    width: width / 1.3,
    height: width / 1.3,
    top: -width / 2,
    left: -width / 10,
    transform: [{ rotate: "45deg" }],
    backgroundColor: Colors.square1,
    borderRadius: 20,
    opacity: 0.8
  },
  square2: {
    position: "absolute",
    width: width / 1.1,
    height: width / 1.1,
    top: -width / 2.3,
    left: width / 2.5,
    backgroundColor: Colors.square2,
    transform: [{ rotate: "45deg" }],
    position: "absolute",
    borderRadius: 20
  },
  textContainer: {
    flex: 1,
    marginTop: height / 4,
    marginLeft: 20
  },
  titleText: {
    fontSize: 35,
    color: Colors.text,
    fontWeight: "bold"
  },
  inputContainer: {
    maxHeight: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 10
  },
  buttonContainer: {
    marginBottom: 60
  }
});
export default SignupScreen;
