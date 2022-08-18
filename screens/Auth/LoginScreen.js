import { useState } from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { tw } from "@lib";
import { TextField, Logo, ButtonPrimary } from "@components";

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <View>
        <View style={tw`flex  items-center pt-3`}>
          <Logo />
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
      <ButtonPrimary onClick={() => {}}>Zaloguj się</ButtonPrimary>
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
