import { useState } from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import tw from "twrnc";
import { TextField, Button } from "../../components";

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <View>
        <View style={tw`flex  items-center pt-3`}>
          <Image
            style={[styles.image]}
            source={require("../../assets/Calmstring-with-logo.png")}
          />
        </View>
        <LoginForm />
      </View>
    </SafeAreaView>
  );
  e;
}

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={tw`px-5 mt-3 `}>
      <TextField
        placeholder={"Email"}
        value={email}
        onChange={setEmail}
        type="email"
      />
      <TextField
        placeholder={"Hasło"}
        value={password}
        onChange={setPassword}
        type="password"
      />
      <Button onClick={() => {}}>Zaloguj się</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 169,
  },
  input: {
    //lineHeight: 0,
  },
});
