import { View, Text } from "react-native";
import React, { createContext, useState } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [user, setUser] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const navigation = useNavigation();

  return (
    <AuthContext.Provider
      value={{
        errorMessage,
        isError,
        user,
        setUser,
        register: async (email, password) => {
          setErrorMessage("");
          await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log(user.email);

              console.log("user was registered", user.email);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              setErrorMessage(errorCode.toString().replace("auth/", ""));
              setIsError(true);
            });
        },
        login: async (email, password) => {
          await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              const user = userCredential.user;

              console.log(user.email);
              console.log("user was Logged in", user.email);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              setErrorMessage(errorCode.toString().replace("auth/", ""));
              setIsError(true);
            });
        },
        signOut: async () => {
          await signOut(auth)
            .then(() => {
              navigation.navigate("LoginScreen");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
            });
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
