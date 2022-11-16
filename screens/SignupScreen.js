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
import { AuthContext } from "../components/AuthProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordReapet] = useState("");
  const { register, errorMessage, isError } = useContext(AuthContext);

  useEffect(() => {
    const unsunscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("TabNavigatorScreen");
      }
    });
    return unsunscribe;
  }, []);
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Create an acount</Text>
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

      <FormInput
        iconType="lock"
        placeHolder="confirm password"
        secureTextEntry
        value={passwordRepeat}
        onChangeText={(text) => setPasswordReapet(text)}
      />
      {password === passwordRepeat && errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      {password !== passwordRepeat && (
        <Text style={styles.errorMessage}>passwords are not the same</Text>
      )}
      <FormButton
        title="Register"
        color="blue"
        onPress={() => register(email, password)}
      />
      <View style={{ width: "90%", alignItems: "center", marginVertical: 7 }}>
        <Text>
          By registering you accept our{" "}
          <Text style={{ color: "orange" }}>terms of service</Text>
        </Text>
        <Text style={{ color: "orange" }}>and privacy policy</Text>
      </View>

      <SocialMediaButton
        color="red"
        title="Google"
        icon="google"
        backgroundColor="#f5e7ea"
        iconSize={30}
      />

      <SocialMediaButton
        color="blue"
        title="facebook"
        icon="facebook-square"
        backgroundColor="#e6eaf4"
        iconSize={35}
      />

      <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
        <Text style={styles.text}>already have an account? log in</Text>
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
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 25,
  },
  errorMessage: {
    fontSize: 15,
    color: "red",
    marginVertical: 6,
  },
});
