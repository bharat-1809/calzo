import React from 'react';
import {Text ,View ,StyleSheet, Dimensions } from 'react-native';
import { CheckBox } from 'react-native-elements'
import { LinearGradient } from "expo-linear-gradient";
import SwitchScreenButton from '../components/SwitchScreenComp/SwitchButton';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const SelectSizeScreen = () =>{

  const {header, designStyle} = styles;

  return (
    <View >
        
        <Text style = {header}>Size</Text>
        
        <View style = {{marginTop: 50}} >
          <CheckBox title = 'Regular'/>
          <CheckBox title = 'Medium' />
          <CheckBox title = 'Large' />
        </View>
        
        <LinearGradient 
          style = {designStyle} 
          colors={["#4CAF50", "#2E7D32"]}
          start = {[0.2,0.1]}
          end = {[0.3,0.9]}
          >
        </LinearGradient>
        <SwitchScreenButton title = 'Next'/>
    </View>
  );
}

const styles = StyleSheet.create({
    
  header:{
    marginTop: (0.043 * height),
    marginLeft: (.064 * width),
    color: '#343439',
    fontWeight: 'bold',
    fontSize: 25
    },
  
  designStyle: {
    position: 'absolute',
    marginTop: (.833* height),
    height: (.18 * height),
    width: (1 * width),
    elevation: 5,
    borderTopRightRadius: 55,
    borderTopLeftRadius: 55
  }

})

export default SelectSizeScreen;
