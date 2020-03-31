import React from "react";
import { View, TextInput, StyleSheet, Dimensions, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MenuContainer from "./MenuButton";
import { TouchableOpacity } from "react-native-gesture-handler";
import CartScreen from "../../Screens/CartScreen";
import { useNavigation, CommonActions } from "@react-navigation/native";
const height = Dimensions.get("window").height;

function TopBar(props) {
  const navigation = useNavigation();
  const numberOfItems = (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.numberOfItems}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.iconBar}>
        <MenuContainer />
        <View style={styles.cartButton}>
          <TouchableOpacity onPress={() => navigation.dispatch(
            CommonActions.navigate({
              name: "Cart",
              params: {},
            })
          )}>
            <MaterialCommunityIcons name="cart" size={30} color="white" />
          </TouchableOpacity>
          {props.numberOfItems ? numberOfItems : <View></View>}
        </View>
      </View>
      <View style={styles.inputBar}>
        <MaterialCommunityIcons name="magnify" size={30} color="#aeaead" />
        <TextInput
          style={styles.input}
          placeholder="Search your food love"
          onChangeText={props.onChangeText}
          value={props.value}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 5,
    width: "100%",
    backgroundColor: "#f50244",
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 0
  },
  iconBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  cartButton: {
    position: "absolute",
    right: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5
  },
  inputBar: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 60,
    padding: 6,
    paddingLeft: 10,
    borderRadius: 18
  },
  input: {
    width: "100%",
    paddingLeft: 10,
    fontSize: 14,
    fontFamily: "comicSans-Regular",
    color: "#aeaead"
  },
  numberContainer: {
    position: "absolute",
    bottom: 0.022 * height,
    left: 18,
    width: 16,
    height: 16,
    backgroundColor: "#03a9f4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#fff"
  },
  number: {
    fontSize: 8,
    fontFamily: "comicSans-Bold",
    color: "#fff"
  }
});

export default TopBar;
