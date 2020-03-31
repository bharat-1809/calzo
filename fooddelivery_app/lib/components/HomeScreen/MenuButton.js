import React from "react";
import { View, StyleSheet} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableNativeFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function MenuContainer() {
    const navigation = useNavigation();
    return (
        <View style={styles.MenuIcon}>
            <TouchableNativeFeedback>
        <MaterialCommunityIcons name="menu" size={30} color="white" onPress={() => navigation.openDrawer()}/>
        </TouchableNativeFeedback>
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