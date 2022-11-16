import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from "react-native";
import React, { useState } from "react";
import { InputWrapper, InputField } from "../styles/AddPost";

export default function AddPostScreen({ navigation }) {
  const [IconClicked, setIconClicked] = useState(false);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => console.log("ds")}>
          <Text style={styles.postHeaderText}>post</Text>
        </Pressable>
      ),
    });
  }, [navigation, IconClicked]);

  return (
    <View style={styles.container}>
      <InputWrapper>
        <InputField
          placeholder="post something new.."
          multiline
          numberOfLines={4}
        />
        <View style={styles.plusIcon}>
          {IconClicked && (
            <View>
              <Pressable
                onPress={() => console.log("clciked")}
                style={styles.eachIcon}
              >
                <Image
                  source={require("../assets/post.png")}
                  style={styles.eachIcon}
                />
              </Pressable>
              <Pressable
                onPress={() => console.log("clciked")}
                style={styles.eachIcon}
              >
                <Image source={require("../assets/camera.jpg")} />
              </Pressable>
            </View>
          )}
          <Pressable
            onPress={() => setIconClicked((prev) => !prev)}
            style={styles.eachIcon}
          >
            <Image source={require("../assets/plus.png")} />
          </Pressable>
        </View>
      </InputWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
  },
  postHeaderText: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white",
  },
  plusIcon: {
    position: "absolute",
    bottom: 30,
    left: 30,
  },
  eachIcon: {
    marginVertical: 4,
  },
});
