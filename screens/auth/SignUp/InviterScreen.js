import { View } from "react-native";
import React from "react";
import {
  TextField,
  FieldMessage,
  FieldLabel,
  ButtonPrimary,
} from "@components/";
import { tw } from "@lib";
import { useVerifyInviter } from "@hooks/auth";
import { REGISTRATION } from "@constants/";

import FormBase from "./FormBase";

function VerifyInviterForm({ navigation }) {
  const { inviter, setInviter, isValid, submit } = useVerifyInviter();

  const onSubmit = () => {
    const submited = submit();
    if (submited) {
      navigation.navigate("ChooseAuthMethod");
    }
  };

  return (
    <>
      <FieldLabel text={REGISTRATION.INVITER_FORM_LABEL} />
      <TextField
        value={inviter}
        onChange={setInviter}
        placeholder="np. Fryderyk"
      />
      {!isValid && (
        <FieldMessage severity="error" text={REGISTRATION.INVALID_USERNAME} />
      )}
      <ButtonPrimary onClick={onSubmit} disabled={!isValid}>
        {REGISTRATION.NEXT}
      </ButtonPrimary>
    </>
  );
}

export default function VerifyInviter({ navigation }) {
  return (
    <FormBase text={REGISTRATION.INVITER_FORM_HEADER}>
      <VerifyInviterForm navigation={navigation} />
    </FormBase>
  );
}
