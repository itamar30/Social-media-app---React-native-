import { View, Text, StyleSheet, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/AuthProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebaseConfig";

export default function ProfileScreen() {
  const [userState, setUserState] = useState(null);
  const { signOut } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserState(user);
      }
    });
  }, [userState]);

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>

      <Text>hello {userState?.email}</Text>
      <Button title="Log Out" onPress={() => signOut()} />
    </View>
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
