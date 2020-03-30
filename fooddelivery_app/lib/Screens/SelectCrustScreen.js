import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";


import CircleCheckBox, {LABEL_POSITION} from 'react-native-circle-checkbox';  
import GreenButton from '../components/SelectCrustComp/GreenButton';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const SelectCrust = () => {
  const { header, designStyle } = styles;

  return (
    <View style = {{backgroundColor: 'white'}}>
      <Text style={header}>Crust</Text>

      <View style={{ marginTop: 50 }}>

      
        <CircleCheckBox
          checked={true}
          onToggle={(checked) => console.log('My state is: ', checked)}
          labelPosition={LABEL_POSITION.RIGHT}
          label="Thin Crust"
          styleLabel = {styles.checkBoxText}
          styleCheckboxContainer = {styles.checkbox}
          innerColor = '#4CAF50'
          outerSize = {22}
          filterSize = {19}
          innerSize = {12}
          filterColor = 'white'
          outerColor = '#707070'

        />

        <CircleCheckBox
          checked={true}
          onToggle={(checked) => console.log('My state is: ', checked)}
          labelPosition={LABEL_POSITION.RIGHT}
          label="Hand Tossed"
          styleLabel = {styles.checkBoxText}
          styleCheckboxContainer = {styles.checkbox}
          innerColor = '#4CAF50'
          outerSize = {22}
          filterSize = {19}
          innerSize = {12}
          filterColor = '#FFFFFF'
          outerColor = '#707070'
        />

        <CircleCheckBox
          checked={true}
          onToggle={(checked) => console.log('My state is: ', checked)}
          labelPosition={LABEL_POSITION.RIGHT}
          label="Pan Pizza "
          styleLabel = {styles.checkBoxText}
          styleCheckboxContainer = {styles.checkbox}
          innerColor = '#4CAF50'
          outerSize = {22}
          filterSize = {19}
          innerSize = {12}
          filterColor = '#FFFFFF'
          outerColor = '#707070'
        />        

        <CircleCheckBox
          checked={true}
          onToggle={(checked) => console.log('My state is: ', checked)}
          labelPosition={LABEL_POSITION.RIGHT}
          label="Classic Hand Tossed "
          styleLabel = {styles.checkBoxText}
          styleCheckboxContainer = {styles.checkbox}
          innerColor = '#4CAF50'
          outerSize = {22}
          filterSize = {19}
          innerSize = {12}
          filterColor = '#FFFFFF'
          outerColor = '#707070'
        />      
        

      </View>
      <GreenButton />      


    </View>
  );
};

const styles = StyleSheet.create({

  checkBoxText: {

    fontSize: 20,
    width: '100%'
  },

  checkbox:{
    marginLeft: (0.064 * width),
    marginBottom: 10
  },


  header: {
    marginTop: 0.073 * height,
    marginLeft: 0.064 * width,
    color: 'black',
    fontWeight: "bold",
    fontSize: 35,
  },

  
  
});

export default SelectCrust;







