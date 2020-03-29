import React from "react";
import { View, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function MenuContainer({navigation}) {

    const openMenu = () => {
        navigation.openDrawer();
    }
    return (
        <View style={styles.MenuIcon}>
        <MaterialCommunityIcons name="menu" size={30} color="white" onPress={openMenu}/>
        </View>
    );
}

const styles = StyleSheet.create({
    MenuIcon: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 0,
        marginTop: 5,
    }
})