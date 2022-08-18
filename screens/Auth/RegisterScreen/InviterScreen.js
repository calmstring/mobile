import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  Logo,
  TextField,
  FieldMessage,
  FieldLabel,
  ButtonPrimary,
} from "@components/";
import { tw } from "@lib";
import { useVerifyInviter } from "../hooks";

function FormBase({ text, children }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={tw`flex  items-center py-3`}>
          <Logo bare />
          <Text style={tw`text-2xl font-semibold text-center`}>
            {text || "Zarejestruj się do Calmstring"}
          </Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
}

function VerifyInviterForm({ navigation }) {
  const { inviter, setInviter, isValid, submit } = useVerifyInviter();

  const onSubmit = () => {
    const submited = submit();
    if (submited) {
      navigation.navigate("ChooseAuthMethod");
    }
  };

  return (
    <View style={tw`mt-8`}>
      <FieldLabel text="Nazwa użytkownika zapraszającego" />
      <TextField value={inviter} onChange={setInviter} placeholder="User1234" />
      {!isValid && (
        <FieldMessage severity="error" text="Nazwa użytkownika nieprawidłowa" />
      )}
      <ButtonPrimary onClick={onSubmit} disabled={!isValid}>
        Dalej
      </ButtonPrimary>
    </View>
  );
}

export default function VerifyInviter({ navigation }) {
  return (
    <FormBase text="Podaj nazwę użytkownika, który cię zaprosił do aplikacji">
      <VerifyInviterForm navigation={navigation} />
    </FormBase>
  );
}
