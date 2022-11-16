// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";

const firebaseConfig = {
  apiKey: "AIzaSyD8D6TkeVL4ahk8ecHS7rEv_1sESnkWQ40",
  authDomain: "social-media-app-23ffc.firebaseapp.com",
  projectId: "social-media-app-23ffc",
  storageBucket: "social-media-app-23ffc.appspot.com",
  messagingSenderId: "95971299974",
  appId: "1:95971299974:web:650fe7561d9331462df707",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };
