import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Dimensions
} from "react-native";
import Colors from "../constants/colors";
import InputBox from "../components/SignUpScreen/InputBox";
import Button from "../components/SignUpScreen/Button";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function SignupScreen(props) {
  const [name, setName] = useState("");
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.shapeWrapper}>
        <View style={styles.square1}> </View>
        <View style={styles.square2}> </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.titleText}> Create Account </Text>
        <KeyboardAvoidingView
          style={styles.inputContainer}
          behavior="padding"
          keyboardVerticalOffset={20}
        >
          <View style={styles.inner}>
            <InputBox
              placeholder="Name"
              iconName="account-outline"
              secureText={false}
              keyboardType="default"
              value={name}
              onChangeText={text => {
                setName(text);
              }}
            />
            <InputBox
              placeholder="Enrollment Number"
              iconName="format-list-bulleted"
              secureText={false}
              keyboardType="visible-password"
              value={enrollmentNumber}
              onChangeText={text => setEnrollmentNumber(text)}
            />
            <InputBox
              placeholder="Phone Number"
              iconName="phone"
              secureText={false}
              keyboardType="numeric"
              value={phoneNumber}
              onChangeText={text => setPhoneNumber(text)}
            />
            <InputBox
              placeholder="Email"
              iconName="email-outline"
              secureText={false}
              keyboardType="email-address"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <InputBox
              placeholder="password"
              iconName="lock-outline"
              secureText={true}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
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
    transform: [
      {
        rotate: "45deg"
      }
    ],
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
    transform: [
      {
        rotate: "45deg"
      }
    ],
    position: "absolute",
    borderRadius: 20,
    opacity: 0.9
  },

  textContainer: {
    flex: 1,
    marginTop: height / 3.7,
    marginLeft: -10
  },
  titleText: {
    fontSize: 35,
    color: Colors.text,
    marginLeft: 30,
    fontWeight: "bold"
  },
  inputContainer: {
    maxHeight: "100%",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 40
  },
  buttonContainer: {
    marginBottom: 70
  }
});
export default SignupScreen;
