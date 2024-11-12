import { StyleSheet , Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Collapsible = () => {
    return (
        <View>
            <View style={{paddingVertical:60, paddingHorizontal: 20}}>
                <Text style={{fontSize: 16}}>Selamat Datang di
                </Text>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                <Text style={{fontSize: 18,fontWeight:"bold"}}>
                Coffeshop Nirwana</Text>
                <View style={{display:"flex", flexDirection: "row", alignItems: "center", gap: 10,}}>
                    <Ionicons name="cart-outline" size={24} color="black"/>
                    <AntDesign name="message1" size={24} color="black"/>
                </View>
                </View>
            </View>
        </View>
    )
}

export default Collapsible
const styles = StyleSheet.create({})