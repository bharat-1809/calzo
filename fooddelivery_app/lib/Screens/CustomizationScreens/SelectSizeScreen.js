import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { CheckBox } from "react-native-elements";
import SwitchScreenButton from "../../components/CustomizationScreen/SwitchButton";
import Colors from "../../constants/colors";
import GreenContainer from "../../components/CustomizationScreen/GreenContainer";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function SelectSizeScreen() {
  const { header } = styles;

  return (
    <View>
      <Text style={header}>Size</Text>

      <View style={{ marginTop: 50 }}>
        <CheckBox title="Regular" />
        <CheckBox title="Medium" />
        <CheckBox title="Large" />
      </View>
      <GreenContainer />
      <SwitchScreenButton title="Next" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 0.073 * height,
    marginLeft: 0.064 * width,
    color: Colors.buttonGrey,
    fontSize: 35,
    fontFamily: "comicSans-Bold"
  }
});
export default SelectSizeScreen;
