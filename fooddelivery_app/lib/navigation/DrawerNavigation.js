import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import MyOrdersOption from "../Screens/MenuDrawer/MyOrders";
import AboutOption from "../Screens/MenuDrawer/About";
import ProfileOption from "../Screens/MenuDrawer/Profile";
import SettingOption from "../Screens/MenuDrawer/Settings";
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
      minSwipeDistance={1}
      drawerStyle={{ width: 0.8 * width }}
      drawerContent={props => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="home" size={25} color="#5d5c5c" />
          )
        }}
      />
      <Drawer.Screen
        name="My Orders"
        component={MyOrdersOption}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="package" size={25} color="#5d5c5c" />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileOption}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="account" size={25} color="#5d5c5c" />
          )
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingOption}
        options={{
          drawerIcon: () => (
            <MaterialCommunityIcons name="settings" size={25} color="#5d5c5c" />
          )
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
          )
        }}
      />
    </Drawer.Navigator>
  );
}
export default DrawerMenu;
