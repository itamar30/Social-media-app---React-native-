import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ToucbhleOpacity,
  Pressable,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LoginScreen from "./LoginScreen";

const Skip = ({ ...props }) => {
  return <Button title="skip" color="#000000" {...props} />;
};

const Next = ({ ...props }) => {
  return <Button title="Next" color="#000000" {...props} />;
};

const Done = ({ ...props }) => {
  return (
    <Pressable {...props}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Done</Text>
      </View>
    </Pressable>
  );
};
export default function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace("LoginScreen")}
      onDone={() => navigation.replace("LoginScreen")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: <Image source={require("../assets/bg1.png")} />,
          title: "Connect to the world",
          subtitle: "Meet other peopler",
        },
        {
          backgroundColor: "#fdeb93",
          image: <Image source={require("../assets/bg2.png")} />,
          title: "Share favorites",
          subtitle: "Share your favorites",
        },
        {
          backgroundColor: "#e9bcbe",
          image: <Image source={require("../assets/bg3.png")} />,
          title: "Become a star",
          subtitle: "Be in center",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
