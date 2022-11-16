import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MessagesScreen from "./tabsScreens/MessagesScreen";
import ProfileScreen from "./tabsScreens/ProfileScreen";
import AllPostScreeens from "./AllPostScreeens";
import HomeScreen from "./tabsScreens/HomeScreen";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigatorScreen({ navigation }) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AllPostScreeens"
        component={AllPostScreeens}
        options={{
          headerTitle: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="ios-home-outline"
              size={size}
              color={color}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesScreen"
        component={MessagesScreen}
        options={{
          headerTitle: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="message1"
              size={size}
              color={color}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerTitle: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign
              name="user"
              size={size}
              color={color}
              style={{
                width: size,
                height: size,
                borderRadius: size,
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
