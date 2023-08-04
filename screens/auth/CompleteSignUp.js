import { SafeAreaView, View } from "react-native";
import { TextField, ButtonPrimary } from "@components/";
import React from "react";
import { tw } from "@lib/";
import { useCompleteSignUp } from "@hooks/auth";

export default function CompleteSignUp({ navigation }) {
  const {
    username,
    setUsername,
    fullName,
    setFullName,
    errors,
    isLoading,
    submit,
  } = useCompleteSignUp();

  const onSubmit = async () => {
    const submited = await submit();
    if (submited) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Calmstring" }],
      });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={tw`mt-8`}>
        <TextField
          label="Nazwa użytkownika*"
          value={username}
          onChange={setUsername}
          error={errors.username}
          placeholder="Wpisz nazwę użytkownika"
        />
        <TextField
          label="Imię i nazwisko (opcjonalnie)"
          value={fullName}
          onChange={setFullName}
          error={errors.fullName}
          placeholder="Wpisz imię i nazwisko"
        />
        <ButtonPrimary
          disabled={isLoading || Object.keys(errors).length}
          onClick={onSubmit}
        >
          Zapisz
        </ButtonPrimary>
      </View>
    </SafeAreaView>
  );
}
