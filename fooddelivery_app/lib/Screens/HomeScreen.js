import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  YellowBox
} from "react-native";
import _ from "lodash";

import Colors from "../constants/colors";
import Firebase from "../constants/firebase";

import TopBar from "../components/HomeScreen/TopBar";
import Options from "../components/HomeScreen/Options";
import Card from "../components/HomeScreen/Card";
//This is to ignore warnings about delay of receiving data from firebase.
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};

function HomeScreen(props) {
  const [loading, setloading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [numberOfItems, setNumberOfItems] = useState(7);
  const [vegSelected, setVegSelected] = useState(false);
  const [nonVegSelected, setNonVegSelected] = useState(false);
  const [pizzaManiaSelected, setPizzaManiaSelected] = useState(false);
  const [sidesSelected, setSidesSelected] = useState(false);
  const [vegPizza, setVegPizza] = useState([]);
  useEffect(() => {
    const db = Firebase.firestore()
      .collection("restaurants")
      .doc("domino's")
      .collection("Veg");
    var list = [];
    db.get().then(snapshot => {
      snapshot.forEach(doc => {
        const { large, medium, name, regular } = doc.data();
        list.push({
          id: doc.id,
          name,
          regular,
          medium,
          large
        });
      });
    });
    setVegPizza(list);
    console.log(vegPizza);
    if (loading) {
      setloading(false);
    }
  }, []);
  function selectedHandler(num) {
    if (num == 0) {
      setVegSelected(!vegSelected);
    } else if (num == 1) {
      setNonVegSelected(!nonVegSelected);
    } else if (num == 2) {
      setPizzaManiaSelected(!pizzaManiaSelected);
    } else if (num == 3) {
      setSidesSelected(!sidesSelected);
    }
  }

  function Item({ title, price }) {
    return <Card title={title} price={price} />;
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar
        onChangeText={text => setSearchText(text)}
        value={searchText}
        numberOfItems={numberOfItems}
      />
      <View style={styles.optionBar}>
        <Options
          title="Veg"
          onPress={() => selectedHandler(0)}
          selected={vegSelected}
        />
        <Options
          title="Non-Veg"
          onPress={() => selectedHandler(1)}
          selected={nonVegSelected}
        />
        <Options
          title="Pizza Mania"
          onPress={() => selectedHandler(2)}
          selected={pizzaManiaSelected}
        />
        <Options
          title="Sides"
          onPress={() => selectedHandler(3)}
          selected={sidesSelected}
        />
      </View>
      <View style={styles.line}></View>
      <FlatList
        data={vegPizza}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Item title={item.name} price={item.regular} />
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  optionBar: {
    width: "90%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 5,
    marginVertical: 15,
    borderColor: "#929292",
    backgroundColor: "white",
    elevation: 8
  },
  line: {
    width: "70%",
    borderWidth: 0.5,
    marginTop: 10,
    marginBottom: 20
  }
});

export default HomeScreen;
