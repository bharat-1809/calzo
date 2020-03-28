import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import SwitchScreenButton from './Button';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;




const GreenButton = () => {
  const {  designStyle, container, textStyle1 } = styles;


    
return (
    <View>
      
      <View style = {styles.container}>  
      <LinearGradient
        style={designStyle}
        colors={["#4CAF50", "#2E7D32"]}
        start={[0.2, 0.1]}
        end={[0.3, 0.9]}
      >
                <Text style = {textStyle1}>Total Amount: 121</Text>
                <Text style = {textStyle1}>Tax: 7</Text>
                <Text style = {textStyle1}>Delivery charges: 30</Text>
                <Text style = {textStyle1}>Gross Amount: 158</Text>
            
                <SwitchScreenButton title="Proceed to Payment" />

            </LinearGradient>
            
        </View>
    </View>
  );
};
export default GreenButton;


const styles = StyleSheet.create({

    
    container: {
        height: (0.2 * height),
        width: (0.70 * width),
    },

    textStyle1:{
        fontSize: 12,
        //backgroundColor: 'pink'  
        color: 'white',
        paddingTop:2 ,
        marginHorizontal: 130,
        width: '100%'
    }, 
    designStyle: {
        position: "absolute",
        marginTop: (0.00 * height),
        height: (0.2 * height),
        width: (1 * width),
        elevation: 5,
        borderTopRightRadius: 60,
        borderTopLeftRadius: 60,
    },

});











