import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PizzaDetail from "../components/CartPageComp/PizzaDetail";
import GreenContainer from "../components/CartPageComp/GreenContainer";

function CartScreen() {
  const data = [
    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/Deluxe_Veggie.jpg"),
      pizzaName: "Peppy Panner",
      pizzaDescription: "Thin Crust",
      pizzaPrice: 333
    },

    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/Double_Cheese_Margherita.jpg"),
      pizzaName: "Farmhouse",
      pizzaDescription: "Thin Crust",
      pizzaPrice: 342
    },

    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/IndianTandooriPaneer.jpg"),
      pizzaName: "Farmhouse",
      pizzaDescription: "Thin Crust",
      pizzaPrice: 343
    },

    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/kadhai_paneer.jpg"),
      pizzaName: "Farmhouse",
      pizzaDescription: "Thin Crust",
      pizzaPrice: 143
    },

    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/Mexican_Green_Wave.jpg"),
      pizzaName: "Farmhouse",
      pizzaDescription: "Thin Crust",
      pizzaPrice: 333
    },

    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/Veg_Extravaganz.jpg"),
      pizzaName: "Farmhouse",
      pizzaDescription: "Thin Crust",
      pizzaPrice: 333
    },

    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/Corn_Cheese.jpg"),
      pizzaName: "Farmhouse",
      pizzaDescription: "Thin Crust",
      pizzaPrice: 333
    },

    {
      imageSource: require("../../assets/database/PIZZA/Veg_Pizza/Peppy_Paneer.jpg"),
      pizzaName: "Farmhouse",
      pizzaDescription: " Crust",
      pizzaPrice: 333
    }
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          <MaterialCommunityIcons name="cart" size={35} style={styles.icon} />
          <Text> </Text>Cart
        </Text>
        <View style={styles.line}></View>
      </View>

      <FlatList
        data={data}
        keyExtractor={() => Math.random().toString()}
        renderItem={({ item }) => (
          <PizzaDetail
            pizzaDescription={item.pizzaDescription}
            pizzaName={item.pizzaName}
            pizzaPrice={item.pizzaPrice}
            imageSource={item.imageSource}
          />
        )}
      />
      <GreenContainer />
    </View>
  );
}
export default CartScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: "13%"
  },
  iconContainer: {},
  icon: {
    color: "#5d5d5d"
  },
  iconCon: {
    marginBottom: "1%"
  },
  line: {

    width: '80%',
    height: 0.1,
    color: "#5d5d5d",
    borderStyle: "dotted",
    borderColor: "#5d5d5d",
    borderWidth: 0.5,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: '2%',
  },
  headerText: {
    marginLeft: "8%",
    marginBottom: "3%",
    justifyContent: "center",
    color: "#5d5d5d",
    fontSize: 32,
    fontFamily: "comicSans-Bold"
  }
});
