import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import {CheckBox} from "react-native-elements";
import GreenContainer from "../../components/CustomizationScreen/GreenContainer";
import SwitchScreenButton from "../../components/CustomizationScreen/SwitchButton";
import Colors from "../../constants/colors";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default function AddOn(props) {
  return (
    <View>
      <Text style={styles.header}>Toppings</Text>
      <View style={styles.chkBoxCon}>
        <CheckBox fontFamily="comicSans-Regular" title="Tomato" />
      </View>
      <GreenContainer />
      <SwitchScreenButton title="Next"/>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 0.073 * height,
    marginLeft: 0.064 * width,
    color: Colors.buttonGrey,
    fontSize: 35,
    fontFamily: "comicSans-Bold",
  },
  chkBoxCon: {
    marginTop: 100,
  },
});
