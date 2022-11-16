import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import react, { useState, useRef, useEffect, useContext } from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import SocialMediaButton from "../components/SocialMediaButton";
import LottieView from "lottie-react-native";
import { AuthContext } from "../components/AuthProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, errorMessage, isError } = useContext(AuthContext);

  const animation = useRef(null);

  const goTo = async () => {
    const unsunscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.replace("TabNavigatorScreen");
      }
    });
    return unsunscribe;
  };

  useEffect(() => {
    animation.current?.reset();
    animation.current?.play();
    goTo();
  }, [errorMessage]);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "white",
        }}
        source={require("../assets/socialMedia.json")}
      />

      <FormInput
        iconType="user"
        placeHolder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <FormInput
        iconType="lock"
        placeHolder="password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      {isError && <Text style={styles.errorMessage}>{errorMessage}</Text>}

      <FormButton
        title="Log in"
        color="blue"
        onPress={() => login(email, password)}
      />
      <TouchableOpacity>
        <Text style={styles.text}>Forgot Password</Text>
      </TouchableOpacity>

      <SocialMediaButton
        color="red"
        title="Google"
        icon="google"
        backgroundColor="#f5e7ea"
        iconSize={30}
        onPress={() => console.log("btn tapped")}
      />

      <SocialMediaButton
        color="blue"
        title="facebook"
        icon="facebook-square"
        backgroundColor="#e6eaf4"
        iconSize={35}
      />
      <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
        <Text style={styles.text}>dont have an account? create here</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 18,
    marginVertical: 10,
  },
  errorMessage: {
    fontSize: 15,
    color: "red",
    marginVertical: 6,
  },
});
