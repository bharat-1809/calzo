import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import {
  DrawerItemList,
  DrawerContentScrollView,
  DrawerItem
} from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ConCircle from "./conCircle";
import { Divider } from "react-native-elements";

function CustomDrawerContent(props) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <ConCircle />
      </View>
      <View style={styles.blankContainer}></View>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.creditContainer}>
        <Text style={styles.creditText}>Made with </Text>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name="heart" size={25} color="#fc3f5f" />
        </View>
        <Text style={styles.creditText}> by </Text>
        <Text style={styles.boldText}>E-CELL</Text>
        <Text style={styles.creditText}> NIT Agartala</Text>
      </View>
    </View>
  );
}
export default CustomDrawerContent;

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    width: "100%"
  },
  imgContainer: {
    flex: 1,
    position: "absolute",
    bottom: "54%",
    right: "15%"
  },
  blankContainer: {
    height: "35%",
    width: "100%"
  },
  creditContainer: {
    flex: 1,
    flexDirection: 'row',
    width: "100%",
    position: "absolute",
    bottom: "3%",
    justifyContent: "center",
    alignItems: "center"
  },
  creditText: {
    fontSize: 12,
    fontFamily: "comicSans-Regular",
    color: "#5d5c5c"
  },
  boldText: {
    fontSize: 12,
    fontFamily: "comicSans-Bold",
    color: "#5d5c5c",
    // fontWeight: 'bold'
  },
  iconContainer: {
    marginTop: '0.5%',
  },
});
