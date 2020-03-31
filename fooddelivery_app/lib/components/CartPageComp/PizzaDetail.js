import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const PizzaDetail = ({
  imageSource,
  pizzaName,
  pizzaDescription,
  pizzaPrice
}) => {
  const {
    imageStyle,
    container,
    primTextStyle,
    pizzaSizeStyle,
    pizzaNameStyle,
    pizzaPriceStyle,
    iconStyle
  } = styles;

  return (
    <View style={container}>
      <Image source={imageSource} style={imageStyle} />
      <View style={primTextStyle}>
        <Text style={pizzaSizeStyle}> Regular </Text>
        <Text style={pizzaNameStyle}>{pizzaName}</Text>
        <Text style={{ marginBottom: 0.07 * height }}>{pizzaDescription}</Text>
        <Text style={pizzaPriceStyle}>{'\u20B9'} {pizzaPrice}</Text>
        <TouchableOpacity style={styles.deleteContainerStyle}>
          <MaterialCommunityIcons name="delete-outline" style={iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  deleteContainerStyle: {
    flex: 1,
    justifyContent: "flex-end",
    position: "absolute",
    bottom: "4%",
    right: "4%",
    
  },

  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 6,
    elevation: 4,
    borderRadius: 20,
    padding: 10,
  },

  pizzaNameStyle: {
    marginTop: "3%",
    width: "60%",
    paddingTop: 5,
    color: "#2d2d2d",
    fontFamily: "comicSans-Regular",
  },

  pizzaSizeStyle: {
    position: "absolute",
    alignSelf: "flex-end",
    marginTop: "3%",
    width: 0.16 * width,
    paddingTop: 5,
    color: "#2d2d2d",
    fontFamily: "comicSans-Regular",
  },

  imageStyle: {
    width: 0.325 * width,
    height: 0.325 * width,
    borderRadius: 10,
    marginRight: 20,
    alignSelf: "center"
  },

  primTextStyle: {
    flex: 1,
    flexDirection: "column"
  },

  pizzaPriceStyle: {
    width: "40%",
    bottom: "4%",
    position: "absolute",
    color: "#2d2d2d",
    fontFamily: "comicSans-SemiBold", //absolute position would ensure that pizzaPrice won't change location in case of pizza name/description becoming multiline
  },

  iconStyle: {
    fontSize: 27,
    alignSelf: "flex-end",
    justifyContent: "flex-end",
    color: "#737373"
  }
});

export default PizzaDetail;
