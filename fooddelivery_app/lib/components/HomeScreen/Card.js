import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";

const width = Dimensions.get("window").width;
function Card(props) {
  return (
    <View style={styles.wrapper}>
      <Image source={require("./pizza.png")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}> {props.title} </Text>
        <View style={styles.priceContainer}>
          <Text>Rs.{props.price}</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}>ADD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: width / 2.2,
    height: width / 2,
    margin: 5,
    borderRadius: 5,
    elevation: 10
  },
  image: {
    height: width / 2.8,
    width: width / 2.2
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    paddingTop: 2
  },
  priceContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  addButton: {
    backgroundColor: "#47ab4b",
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  addText: {
    color: "white"
  },
  name: {
    fontSize: 14
  }
});
export default Card;
