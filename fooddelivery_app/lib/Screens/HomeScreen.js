import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, View, FlatList } from "react-native";

import Colors from "../constants/colors";

import TopBar from "../components/HomeScreen/TopBar";
import Options from "../components/HomeScreen/Options";
import Card from "../components/HomeScreen/Card";

function HomeScreen(props) {
  const [searchText, setSearchText] = useState("");
  const [numberOfItems, setNumberOfItems] = useState(7);
  const [vegSelected, setVegSelected] = useState(false);
  const [nonVegSelected, setNonVegSelected] = useState(false);
  const [pizzaManiaSelected, setPizzaManiaSelected] = useState(false);
  const [sidesSelected, setSidesSelected] = useState(false);
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
  //dummy data
  const data = [
    {
      id: "1",
      title: "Indie Panner"
    },
    {
      id: "2",
      title: "Farmhouse"
    },
    {
      id: "3",
      title: "Fresh Vegie"
    },
    {
      id: "4",
      title: "Chicken Dominator"
    },
    {
      id: "5",
      title: "Chicken Barbecue"
    }
  ];
  function Item({ title }) {
    return <Card title={title} />;
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
        data={data}
        renderItem={({ item }) => <Item title={item.title} />}
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
