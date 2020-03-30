import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from "react-native";
import images from "../../constants/images";
const width = Dimensions.get("window").width;
function Card(props) {
  return (
    <View style={styles.wrapper}>
      <Image source={images.image[props.url]} style={styles.image} />
      <View style={styles.detailsContainer}>
        <Text style={styles.name}> {props.title} </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}> {'\u20B9'} {props.price} </Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addText}> ADD </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: width / 2.2,
    height: width / 1.99,
    margin: 5,
    borderRadius: 10,
    elevation: 4
  },
  image: {
    height: width / 3.2,
    width: width / 2.2,
    backgroundColor: "white"
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
    alignItems: "center",
    marginBottom: 2,
  },
  addButton: {
    backgroundColor: "#47ab4b",
    paddingHorizontal: 15,
    borderRadius: 30,
    paddingVertical: 2.5,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  addText: {
    color: "white"
  },
  name: {
    paddingHorizontal: 3.6,
    paddingTop: 8,
    paddingBottom: 0.0,
    textAlign: "center",
    fontSize: 12.5,
    fontFamily: "comicSans-Regular"
  },
  priceText: {
    fontSize: 12.5,
    fontFamily: "comicSans-Regular"
  }
});
export default Card;
