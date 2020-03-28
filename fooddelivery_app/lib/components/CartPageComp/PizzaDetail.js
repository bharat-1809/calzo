import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Dimensions} from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const PizzaDetail1 = ({imageSource, pizzaName, pizzaDescription,pizzaPrice}, props) => {


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
                               
            </View>
              </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FAFAF7',
        marginHorizontal: 20,
        
        marginTop: 5,
      //  backgroundColor: 'skyblue',
        //alignItems: 'center',
       // justifyContent: 'center'
       borderWidth: 0.1,
       elevation: 0.8,
      // borderStyle: 'dashed',
       borderRadius: 20
    },

    pizzaNameStyle: {
        marginBottom: (0.004 * height),
        //borderWidth:3,
        width:'60%',
        paddingTop: 5

    },

    pizzaSizeStyle: {
        position: 'absolute',
        alignSelf: 'flex-end',
        width: (0.16 * width),
        //marginTop: -(.001 * height),
        paddingTop: 5,
       // borderWidth: 2

        //borderWidth: 3
    },

    imageStyle:{
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
      //  backgroundColor: 'pink'
      // justifyContent: 'flex-end'
     //   borderWidth : 1,
    },

    pizzaPriceStyle:{
       // justifyContent: 'flex-end',
      //  borderWidth: 2,
        width: '40%',
        fontWeight: 'bold',
        marginTop: (0.130 * height), //105
        position: 'absolute',  //absolute position would ensure that pizzaPrice won't change location in case of pizza name/description becoming multiline
         
    },

    iconStyle: {
        fontSize: 30,
        alignSelf: 'flex-end',
       justifyContent: 'flex-end',
       // borderWidth: 2,
        position: 'absolute',
        marginTop: 90
    }
})

export default PizzaDetail1;




