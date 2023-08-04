import { View, SafeAreaView } from "react-native";
import React from "react";
import { tw } from "@lib";
import { Logo, ButtonPrimary, ButtonSecondary } from "@components";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={[tw`my-20`, { flex: 1, flexDirection: "column" }]}>
      <View style={[{ flex: 2 }, tw`justify-center items-center`]}>
        <Logo />
      </View>

      <View style={[{ flex: 3 }, tw`justify-center`]}>
        <ButtonPrimary onClick={() => navigation.navigate("Login")}>
          Zaloguj się
        </ButtonPrimary>
        <ButtonSecondary onClick={() => navigation.navigate("Register")}>
          Załóż konto
        </ButtonSecondary>
      </View>
    </SafeAreaView>
  );
}
