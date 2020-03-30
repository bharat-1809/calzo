import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SignupScreen from "../Screens/SignupScreen";
import LoginScreen from "../Screens/LoginScreen";
import SelectSizeScreen from "../Screens/CustomizationScreens/SelectSizeScreen";
import DrawerMenu from "./DrawerNavigation";

=======
import HomeScreen from "../Screens/HomeScreen";
import CartScreen from "../Screens/CartScreen";

function MainNavigator() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="LoginPage" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="DrawerMenu" component={DrawerMenu} />
        <Stack.Screen name="SelectSize" component={SelectSizeScreen} />
=======
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
