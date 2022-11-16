import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function FormInput({
  iconType,
  placeHolder,
  labelValue,
  ...otherProps
}) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={placeHolder}
        value={labelValue}
        {...otherProps}
      />

      <View style={styles.icon}>
        <AntDesign name={iconType} size={24} color="black" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "90%",
    flexDirection: "row",
    borderWidth: 1,
    marginVertical: 10,
  },
  icon: {
    width: "13%",
    borderLeftWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    width: "87%",
    paddingHorizontal: 13,
    fontSize: 18,
    fontWeight: "bold",
  },
});
