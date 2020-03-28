import React from "react";
import { View, TextInput, StyleSheet, Dimensions, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../../constants/colors";

const height = Dimensions.get("window").height;

function TopBar(props) {
  const numberOfItems = (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.numberOfItems}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.iconBar}>
        <MaterialCommunityIcons name="menu" size={35} color="white" />
        <View>
          {props.numberOfItems ? numberOfItems : <View></View>}
          <MaterialCommunityIcons name="cart" size={35} color="white" />
        </View>
      </View>
      <View style={styles.inputBar}>
        <MaterialCommunityIcons name="magnify" size={35} color="lightgray" />
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
    backgroundColor: colors.square1,
    paddingHorizontal: 20,
    paddingTop: 35,
    paddingBottom: 20,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30
  },
  iconBar: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  inputBar: {
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginTop: 20,
    padding: 5,
    borderRadius: 10
  },
  input: {
    width: "100%",
    paddingLeft: 10,
    fontSize: 16,
    fontFamily: "comicSans-Regular",
  },
  numberContainer: {
    position: "absolute",
    top: -4,
    left: 28,
    width: 12,
    height: 12,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7
  },
  number: {
    fontSize: 11,
    fontFamily: "comicSans-Regular",
  }
});

export default TopBar;
