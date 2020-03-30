import React from "react";
import { Dimensions, View, Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyOrdersOption from "../Screens/MenuDrawer/MyOrders";
import AboutOption from "../Screens/MenuDrawer/About";
import ProfileOption from "../Screens/MenuDrawer/Profile";
import HomeScreen from "../Screens/HomeScreen";
import CustomDrawerContent from "../components/SideMenu/CustomDrawer";
const width = Dimensions.get("window").width;

function DrawerMenu() {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="Home"
      backBehavior="initialRoute"
      drawerStyle={styles.drawerStyle}
      drawerContent={props => <CustomDrawerContent {...props} />}
      keyboardDismissMode={"on-drag"}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="home" size={25} color="#5d5c5c" />
          ),
          drawerLabel: () => <Text style={styles.labelText}>Home</Text>
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={MyOrdersOption}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="package" size={25} color="#5d5c5c" />
          ),
          drawerLabel: () => <Text style={styles.labelText}>My Orders</Text>
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileOption}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="account" size={25} color="#5d5c5c" />
          ),
          drawerLabel: () => <Text style={styles.labelText}>Profile</Text>
        }}
      />
      <Drawer.Screen
        name="About"
        component={AboutOption}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons
              name="information"
              size={25}
              color="#5d5c5c"
            />
          ),
          drawerLabel: () => <Text style={styles.labelText}>About</Text>
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerMenu;

const styles = StyleSheet.create({
  drawerStyle: {
    width: 0.8 * width
  },
  labelText: {
    textDecorationColor: "#29b6f6",
    color: "#5d5c5c",
    fontSize: 14,
    fontFamily: "comicSans-Regular"
  }
});
