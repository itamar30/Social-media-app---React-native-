import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./tabsScreens/HomeScreen";
import AddPostScreen from "./AddPostScreen";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function AllPostScreeens({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("AddPostScreen")}
              style={styles.iconsContainer}
            >
              <Entypo
                name="plus"
                size={30}
                color="black"
                style={styles.addPostButton}
              />
            </TouchableOpacity>
          ),

          headerTitle: "",
        }}
      />
      <Stack.Screen
        name="AddPostScreen"
        component={AddPostScreen}
        options={{
          headerRight: () => (
            <MaterialIcons
              name="post-add"
              size={24}
              color="black"
              style={{ margin: 10 }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  addPostButton: {},
  iconsContainer: {
    justifyContent: "space-evenly",
  },
});
