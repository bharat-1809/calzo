import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  YellowBox,
  ActivityIndicator
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
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [numberOfItems, setNumberOfItems] = useState(7);
  const [vegSelected, setVegSelected] = useState(false);
  const [nonVegSelected, setNonVegSelected] = useState(false);
  const [pizzaManiaSelected, setPizzaManiaSelected] = useState(false);
  const [sidesSelected, setSidesSelected] = useState(false);
  const [vegPizza, setVegPizza] = useState([]);
  const [nonVegPizza, setNonVegPizza] = useState([]);
  const [sides, setSides] = useState([]);
  const [pizzaMania, setPizzaMania] = useState([]);
  const [data, setData] = useState([]);
  const [completeData, setCompleteData] = useState([]);
  useEffect(() => {
    if (loading) {
      var data1 = [];
      const db = Firebase.firestore()
        .collection("restaurants")
        .doc("domino's")
        .collection("Veg");
      db.onSnapshot(querySnapshot => {
        var list = [];
        querySnapshot.forEach(doc => {
          const { large, medium, name, regular, url } = doc.data();
          list.push({
            id: doc.id,
            name,
            regular,
            medium,
            large,
            url
          });
        });
        setVegPizza(list);
        data1 = [...data1, ...list];
      });
      const db1 = Firebase.firestore()
        .collection("restaurants")
        .doc("domino's")
        .collection("sides");
      db1.onSnapshot(querySnapshot => {
        var list = [];
        querySnapshot.forEach(doc => {
          const { name, regular, url } = doc.data();
          list.push({
            id: doc.id,
            name,
            regular,
            url
          });
        });
        setSides(list);
        data1 = [...data1, ...list];
      });
      const db2 = Firebase.firestore()
        .collection("restaurants")
        .doc("domino's")
        .collection("nonVeg");
      db2.onSnapshot(querySnapshot => {
        var list = [];
        querySnapshot.forEach(doc => {
          const { large, medium, name, regular, url } = doc.data();
          list.push({
            id: doc.id,
            name,
            regular,
            medium,
            large,
            url
          });
        });
        setNonVegPizza(list);
        data1 = [...data1, ...list];
      });
      const db3 = Firebase.firestore()
        .collection("restaurants")
        .doc("domino's")
        .collection("pizzaMania");
      db3.onSnapshot(querySnapshot => {
        var list = [];
        querySnapshot.forEach(doc => {
          const { name, regular, url } = doc.data();
          list.push({
            id: doc.id,
            name,
            regular,
            url
          });
        });
        setPizzaMania(list);
        data1 = [...data1, ...list];
        setData(data1);
        setCompleteData(data1);
        if (loading) {
          setLoading(false);
        }
      });
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
  useEffect(() => {
    var d = [];
    if (vegSelected) {
      d = [...d, ...vegPizza];
    }
    if (nonVegSelected) {
      d = [...d, ...nonVegPizza];
    }
    if (sidesSelected) {
      d = [...d, ...sides];
    }
    if (pizzaManiaSelected) {
      d = [...d, ...pizzaMania];
    }
    if (d.length === 0) {
      d = [...vegPizza, ...nonVegPizza, ...sides];
    }
    setData(d);
  }, [vegSelected, nonVegSelected, sidesSelected, pizzaManiaSelected]);
  function Item({ title, price, url }) {
    return <Card title={title} price={price} url={url} />;
  }
  const load = loading ? (
    <ActivityIndicator color="blue" />
  ) : (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Item title={item.name} price={item.regular} url={item.url} />
      )}
      numColumns={2}
    />
  );
  function searchTextHandler(text) {
    setSearchText(text);
    if (text === "") {
      setData(completeData);
      return;
    }
    const newData = completeData.filter(item => {
      const itemData = item.name.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    setData(newData);
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      <TopBar
        navigation={props.navigation}
        onChangeText={text => searchTextHandler(text)}
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
      {load}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
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
