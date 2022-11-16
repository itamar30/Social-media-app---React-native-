import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function FormButton({ title, color, ...otherProps }) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, { backgroundColor: color }]}
      {...otherProps}
    >
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    height: 60,
    width: "90%",
    marginVertical: 20,
  },

  btnText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
