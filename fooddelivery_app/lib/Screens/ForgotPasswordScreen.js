import React, { useState } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Firebase from "../constants/firebase";
import Colors from "../constants/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ForgotPasswordScreen = props => {
  const [email, setEmail] = useState("");

  const resetPasswordHandler = () => {
    Firebase.auth().sendPasswordResetEmail(email);
    props.navigation.navigate("LoginPage");
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient
        style={styles.wrapper}
        colors={[Colors.square2, Colors.square1]}
      >
        <Text style={styles.titleText}>Forgot Password ?</Text>
        <MaterialCommunityIcons
          name="lock-reset"
          size={150}
          color="white"
          style={styles.icon}
        />
        <KeyboardAvoidingView
          enabled
          style={{ flex: 1, alignItems: "center" }}
          keyboardVerticalOffset={20}
          behavior="padding"
        >
          <View style={styles.container}>
            <Text style={styles.contentTitle}>
              Enter the email address associated with your account
            </Text>
            <Text style={styles.contentSubContent}>
              We will email you a link to reset your password
            </Text>
            <TextInput
              style={styles.inputContainer}
              placeholder="Enter Your Email Address"
              onChangeText={text => setEmail(text)}
              value={email}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={resetPasswordHandler}
            >
              <LinearGradient
                style={styles.button}
                colors={[Colors.square2, Colors.square1]}
              >
                <Text style={styles.sendText}>Send</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: Colors.primary
  },
  titleText: {
    marginTop: "30%",
    fontSize: 30,
    textAlign: "center",
    color: Colors.background,
    fontFamily: "comicSans-Regular"
  },
  icon: {
    marginVertical: 60,
    alignSelf: "center"
  },
  container: {
    width: "85%",
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 14,
    elevation: 10
  },
  contentTitle: {
    marginHorizontal: 20,
    marginVertical: 20,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "800",
    fontFamily: "comicSans-Regular"
  },
  contentSubContent: {
    fontSize: 15,
    fontFamily: "comicSans-Regular",
    color: Colors.blurText,
    textAlign: "center",
    marginBottom: 20
  },
  inputContainer: {
    width: "80%",
    alignSelf: "center",
    paddingTop: 10,
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginBottom: 10,
    fontFamily: "comicSans-Regular"
  },
  button: {
    alignSelf: "center",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 40
  },
  sendText: {
    color: "#fff",
    fontFamily: "comicSans-SemiBold"
  }
});

export default ForgotPasswordScreen;
