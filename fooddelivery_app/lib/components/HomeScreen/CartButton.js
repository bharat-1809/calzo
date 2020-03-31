import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import CartScreen from "../../Screens/CartScreen";

export default function CartButton() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate(CartScreen)}>
      <MaterialCommunityIcons name="cart" size={30} color="white" />
    </TouchableOpacity>
  );
}
