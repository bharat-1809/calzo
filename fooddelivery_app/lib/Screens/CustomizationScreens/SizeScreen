import React from "react";
import { Text, View, StyleSheet, Dimensions, ToastAndroid, Divider} from "react-native";

import RadioForm from "react-native-simple-radio-button";
import GreenButton from "../../components/CustomizeComp/GreenButton";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const SelectSizeScreen = () => {
  const { header, designStyle } = styles;

  const pizzaSize = [
    { label: "Regular", value: 0 },
    { label: "Medium", value: 1 },
    { label: "Large", value: 2 }
  ];

  return (
    <View style={{ backgroundColor: "white" }}>
      <Text style={header}>Size</Text>
      <View style={styles.line}></View>
      <View style={{ marginTop: 70, height: "100%", width: "100%" }}>
        <RadioForm
          radio_props={pizzaSize}
          initial={-1}
          onPress={value => {
            ToastAndroid.show(value.toString(), ToastAndroid.SHORT);
          }} // can only be used in android or We can use alert as well with onPress
          buttonSize={10}
          buttonOuterSize={20}
          buttonColor={"#707070"}
          labelColor={"black"}
          selectedButtonColor={"#4CAF50"}
          selectedLabelColor={"black"}
          style={styles.checkboxStyle}
          fontSize={44}
          labelStyle={styles.checkboxText}
        />
        <View style={styles.blankContainer}></View>
        <GreenButton />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxText: {
    fontSize: 18,
    width: "100%",
    paddingBottom: 10
  },
  checkboxStyle: {
    marginLeft: 0.064 * width,
    marginBottom: 10
  },
  blankContainer: {
    height: '5%',
  },
  header: {
    marginTop: 0.073 * height,
    marginLeft: 0.064 * width,
    color: "#343434",
    fontFamily: "comicSans-Bold",
    fontSize: 35,
  },
  line: {
    width: '80%',
    height: 0.1,
    color: "#5d5d5d",
    borderStyle: "dotted",
    borderColor: "#5d5d5d",
    borderWidth: 0.5,
    justifyContent: "center",
    alignSelf: "center",
    marginTop: '2%',
    marginBottom: '1%',
    marginRight: '8%',
  },
});

export default SelectSizeScreen;
