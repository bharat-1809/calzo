import React, { useState }  from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions} from 'react-native';

import  { MaterialCommunityIcons} from '@expo/vector-icons';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const PizzaDetail = ({imageSource, pizzaName, pizzaDescription,pizzaPrice}) => {


    const {imageStyle, container, primTextStyle, pizzaSizeStyle, pizzaNameStyle, pizzaPriceStyle, iconStyle} = styles;

   

    return(
               
               <View style = {container}>

                    <Image 
                        source={imageSource}
                        style = {imageStyle}
                    />
                    
                    <View style = {primTextStyle}>
                        <Text style = {pizzaSizeStyle}> Regular </Text> 
                        <Text style =  {pizzaNameStyle}>{pizzaName}</Text>  
                        <Text style = {{marginBottom: (0.07 * height) }}>{pizzaDescription}</Text>
                        <Text style = {pizzaPriceStyle}>Rs {pizzaPrice}</Text>
                        
                        <TouchableOpacity 
                            style = {styles.deleteContainerStyle}
                        >
                            <MaterialCommunityIcons name = 'delete-outline' style={iconStyle}  />
                        </TouchableOpacity>
                    </View>
                    
                </View>

    )
}

const styles = StyleSheet.create({

    deleteContainerStyle:{
       height: 30,
        flex:1,
       justifyContent: 'flex-end',
        position: 'absolute',
        marginTop: 95,
        marginLeft: 125
        
    },

    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FAFAF7',
        marginHorizontal: 20,
        marginTop: 5,
        borderWidth: 0.1,
        elevation: 0.8,
        borderRadius: 20
    },

    pizzaNameStyle: {
        marginBottom: (0.004 * height),
        width:'60%',
        paddingTop: 5

    },

    pizzaSizeStyle: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: (0.16 * width),
        paddingTop: 5,
    },

    imageStyle: {
        width: (0.325 * width),
        height: (0.325 * width),
        borderRadius: 30,
        marginVertical: 5,
        marginLeft: 20,
        marginRight: 20,
        alignSelf: 'center',
        
    },

    primTextStyle:{
        flex: 1,
        flexDirection: 'column',
    },

    pizzaPriceStyle:{
        width: '40%',
        fontWeight: 'bold',
        marginTop: (0.130 * height),
        position: 'absolute',  //absolute position would ensure that pizzaPrice won't change location in case of pizza name/description becoming multiline
         
    },

    iconStyle: {
        fontSize: 30,
        alignSelf: 'flex-end',
       justifyContent: 'flex-end',
        marginTop: 90
    }


})

export default PizzaDetail;




