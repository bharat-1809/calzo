import React from 'react';
import {Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const SwitchScreenButton = props =>{
    return(
        <TouchableOpacity style = {styles.buttonStyle}>
            <Text style = {styles.textStyle}> {props.title} </Text>
        </TouchableOpacity>
    
    );
}

const styles = StyleSheet.create({

   
    buttonStyle: {
        width: (0.70 * width),
        height: (0.066 * height),
        position:'absolute',

        borderWidth: 2,
        marginTop: (.11 * height),
        padding: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 70,
        borderColor: '#ffffff', 
    },
    
    textStyle:{
        alignSelf: 'center',
        color: '#ffffff',
        fontSize: 20
    },
    
});

export default SwitchScreenButton;



