import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HeaderButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={navigation.navigate("LoginScreen")}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
}
