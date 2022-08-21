import React from "react";
import {
  TextField,
  FieldLabel,
  FieldMessage,
  ButtonSecondary,
} from "@components/";
import FormBase from "./FormBase";
import { useRegisterUser } from "@hooks/auth";

export default function CreatePasswordScreen({ navigation }) {
  return (
    <FormBase text="Utwórz hasło">
      <CreatePassword navigation={navigation} />
    </FormBase>
  );
}

function CreatePassword({ navigation }) {
  const {
    password,
    setPassword,
    password_repeated,
    setPassword_repeated,
    submit,
    isValid,
    requestResult,
  } = useRegisterUser();
  return (
    <>
      <FieldLabel text="Hasło" />
      <TextField
        type="password"
        value={password}
        onChange={setPassword}
        placeholder="Hasło"
      />
      <FieldLabel text="Powtórz hasło" />
      <TextField
        type="password"
        value={password_repeated}
        onChange={setPassword_repeated}
        placeholder="Powtórz hasło"
      />
      {!isValid && (
        <FieldMessage severity="error" text="Hasła nie są takie same" />
      )}
      {requestResult.isError && (
        <FieldMessage
          severity="error"
          text={
            requestResult?.error?.data?.detail ||
            requestResult?.error?.data?.password ||
            requestResult?.error?.data?.password_repeated ||
            "Błąd"
          }
        />
      )}
      <ButtonSecondary onClick={submit} disabled={!isValid}>
        Utwórz konto
      </ButtonSecondary>
    </>
  );
}
