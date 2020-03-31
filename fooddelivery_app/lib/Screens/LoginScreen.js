import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/colors";
import LoginButton from "../components/LoginScreenComp/LoginButton";
import LoginInput from "../components/LoginScreenComp/LoginInputBox";
import SignupScreen from "../Screens/SignupScreen";
import DrawerMenu from "../navigation/DrawerNavigation";

import Firebase from "../constants/firebase";
import ForgotPasswordScreen from "./ForgotPasswordScreen";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

function LoginScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsCond, setTermsCond] = useState("");

  const loginHandler = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        props.navigation.navigate(DrawerMenu);
      })
      .catch(error => {
        Alert.alert(
          "Error",
          error.message,
          [
            {
              text: "Try again"
            }
          ],
          {
            cancellable: false
          }
        );
        setPassword("");
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <LinearGradient
          style={styles.container}
          colors={[Colors.square2, Colors.square1]}
        >
          <View style={styles.logoContainer}>
            <View style={styles.logoContainer}></View>
          </View>
          <KeyboardAvoidingView
            enabled
            style={{ flex: 1, alignItems: "center" }}
            behavior={"padding"}
            keyboardVerticalOffset={10}
          >
            <View style={styles.inputContainer}>
              <LoginInput
                placeholder="Email"
                iconName="account-outline"
                keyboardtype="email-address"
                secureTextEntry={false}
                value={email}
                onChangeText={val => setEmail(val)}
              />
              <LoginInput
                placeholder="Password"
                iconName="lock-outline"
                keyboardtype="password"
                secureTextEntry={true}
                value={password}
                onChangeText={val => setPassword(val)}
              />
            </View>
          </KeyboardAvoidingView>
          <View style={styles.buttonContainer}>
            <LoginButton text="LOGIN" onPress={loginHandler} />
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(SignupScreen)}
            >
              <Text style={styles.signupBold}> Sign Up Now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.forgetContainer}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate(ForgotPasswordScreen)}
            >
              <Text style={styles.forgetText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: height,
    width: width
  },
  logoContainer: {
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    flex: 1
  },
  inputContainer: {
    marginLeft: -(0.117 * width),
    alignContent: "center",
    justifyContent: "center",
    top: height / 12
  },
  buttonContainer: {
    //marginLeft: (0.177 * width),
    top: -(0.201 * height)
  },
  signupContainer: {
    top: -(0.16 * height),
    flexDirection: "row"
  },
  signupText: {
    fontSize: 10.5,
    color: Colors.background,
    fontFamily: "comicSans-Regular"
  },
  signupBold: {
    fontSize: 10.5,
    color: Colors.background,
    fontFamily: "comicSans-Bold"
  },
  forgetContainer: {
    top: -(0.035 * height)
  },
  forgetText: {
    fontSize: 10.5,
    fontFamily: "comicSans-Bold",
    color: Colors.background
  }
});
export default LoginScreen;
