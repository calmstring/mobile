import { View, Text } from "react-native";
import React from "react";
import {
  TextField,
  FieldLabel,
  ButtonPrimary,
  FieldMessage,
} from "@components/";
import { tw } from "@lib";
import { useCreateEmailVerification } from "../hooks";
import { ButtonGoogleSignIn } from "@containers/";
import FormBase from "./FormBase";

/**
 * We can sign up via email or google sign in.
 */

function CreateEmailVerification({ navigation }) {
  const { email, setEmail, submit, isValid, verficResult } =
    useCreateEmailVerification();

  const onSubmit = async () => {
    const submited = await submit();
    if (submited) {
      navigation.navigate("VerifyEmail");
    }
  };

  return (
    <View>
      <FieldLabel text="Adres email" />
      <TextField
        value={email}
        onChange={setEmail}
        type="email"
        placeholder="email@example.com"
        disabled={verficResult.isLoading}
      />
      {verficResult.isError && (
        <FieldMessage
          severity="error"
          text={
            verficResult?.error?.data?.email || "Błąd przy wysyłaniu emaila"
          }
        />
      )}
      <ButtonPrimary
        onClick={onSubmit}
        disabled={!isValid || verficResult.isLoading}
      >
        Wyślij kod weryfikacyjny
      </ButtonPrimary>
    </View>
  );
}

export default function ChooseRegistrationMethod({ navigation }) {
  return (
    <FormBase text="Zarejestruj się przez Email">
      <View style={tw`mt-5`}>
        <CreateEmailVerification navigation={navigation} />
      </View>
      <Text style={tw`p-5 text-xl font-semibold text-center`}>Lub</Text>
      <ButtonGoogleSignIn />
    </FormBase>
  );
}
