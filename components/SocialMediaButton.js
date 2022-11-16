import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export default function SocialMediaButton({
  title,
  color,
  icon,
  backgroundColor,
  iconSize,
  ...otherProps
}) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, { backgroundColor: backgroundColor }]}
      {...otherProps}
    >
      <Text style={[styles.btnText, { color: color }]}>{title}</Text>
      <AntDesign
        name={icon}
        size={iconSize}
        color={color}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: "90%",
    marginVertical: 7,
    flexDirection: "row",
  },

  btnText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  icon: {
    position: "absolute",
    right: 10,
  },
});
