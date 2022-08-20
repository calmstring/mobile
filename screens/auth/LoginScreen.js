import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { tw } from "@lib";
import {
  TextField,
  Logo,
  ButtonPrimary,
  FieldMessage,
  FieldLabel,
} from "@components";
import { useLogin } from "@hooks/auth";

export default function LoginScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={tw`flex items-center pt-3`}>
          <Logo />
        </View>
        <LoginForm />
      </ScrollView>
    </SafeAreaView>
  );
  e;
}

function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    submit,
    isValid,
    requestResult: { isLoading, isError, error },
  } = useLogin();
  return (
    <View style={tw`px-5 mt-3 `}>
      <FieldLabel text="Adres email" />
      <TextField
        placeholder={"user@example.com"}
        value={email}
        onChange={setEmail}
        type="email"
      />

      <FieldLabel text="Hasło" />
      <TextField
        placeholder={"********"}
        value={password}
        onChange={setPassword}
        type="password"
      />
      {isError && <FieldMessage text={error?.data?.detail} severity="error" />}
      <ButtonPrimary onClick={() => submit()} disabled={isLoading || !isValid}>
        Zaloguj się
      </ButtonPrimary>
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
