import { View, Text } from "react-native";
import React from "react";
import {
  TextField,
  FieldMessage,
  FieldLabel,
  ButtonPrimary,
} from "@components/";
import FormBase from "./FormBase";
import { useEmailVerify } from "../hooks";
import { useSelector } from "react-redux";
import { tw } from "@lib/";

export default function VerifyEmailScreen({ navigation }) {
  return (
    <FormBase text="Potwierdź, że to ty">
      <VerifyEmail navigation={navigation} />
    </FormBase>
  );
}

function VerifyEmail({ navigation }) {
  const { email } = useSelector((state) => state.registration);
  const { code, setCode, submit, isValid, requestResult } = useEmailVerify();

  const onSubmit = async () => {
    const submited = await submit();
    if (submited) {
      navigation.navigate("AccountCreate");
    }
  };

  return (
    <>
      <View style={tw`mt-5 items-center`}>
        <Text style={tw`text-base text-left`}>
          Wysłaliśmy ci email z kodem weryfikacyjnym na{" "}
          <Text style={tw`font-semibold`}>{email}</Text>
          {"\n"}Wpisz go poniżej, by potwierdzić swój email.
        </Text>
      </View>
      <FieldLabel text="Kod weryfikacyjny" style={tw`mt-5`} />
      <TextField
        type="number"
        value={code}
        onChange={setCode}
        placeholder="123456"
      />
      {requestResult.isError && (
        <FieldMessage
          severity="error"
          text={
            requestResult?.error?.data?.detail ||
            requestResult?.error?.data?.email ||
            requestResult?.error?.data?.code ||
            "Błąd"
          }
        />
      )}
      <ButtonPrimary onClick={onSubmit} disabled={!isValid}>
        Zatwierdź
      </ButtonPrimary>
    </>
  );
}
