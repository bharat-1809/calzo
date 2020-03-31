import React from "react";
import { Text, View, StyleSheet, Dimensions, ToastAndroid } from "react-native";

import RadioForm from 'react-native-simple-radio-button' 
import GreenButton from '../../components/SelectPizzaSizeComp/GreenButton';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const SelectSizeScreen = () => {
  
  const { header, designStyle } = styles;

  const pizzaSize = [
    {label: "Regular", value: 0},
    {label: "Medium", value: 1},
    {label: "Large", value: 2},
  ]

  return (
    <View style = {{backgroundColor: 'white'}}>
      <Text style={header}>Size</Text>

      <View style={{ marginTop: 70 }}>

      <RadioForm 
        radio_props = {pizzaSize}
        initial={-1}
        onPress = {(value) => {ToastAndroid.show(value.toString(), ToastAndroid.SHORT)}} // can only be used in android or We can use alert as well with onPress
        buttonSize = {10}
        buttonOuterSize = {20}
        buttonColor = {'#707070'}
        labelColor = {'black'}
        selectedButtonColor = {'#4CAF50'}
        selectedLabelColor = {'black'}
        style = {styles.checkboxStyle}
        fontSize = {44}
        labelStyle = {styles.checkboxText}
      />

      </View>

      <GreenButton />    

    </View>
  );
};

const styles = StyleSheet.create({

  checkboxText: {
    fontSize: 18,
    width: '100%',
    paddingBottom: 10
  },

  checkboxStyle:{
    marginLeft: 0.064 * width,
    marginBottom: 10,
  },

  header: {
    marginTop: 0.073 * height,
    marginLeft: 0.064 * width,
    color: 'black',
    fontWeight: "bold",
    fontSize: 35,
  },

  
});

export default SelectSizeScreen;








