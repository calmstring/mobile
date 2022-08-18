import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import {
  Logo,
  TextField,
  ErrorMessage,
  FieldLabel,
  ButtonPrimary,
} from "@components/";
import { tw } from "@lib";
import { useVerifyEmail, useVerifyInviter } from "./hooks";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function RegisterScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VerifyInviter"
        options={{ headerShown: false }}
        component={VerifyInviter}
      />
      <Stack.Screen
        name="VerifyEmail"
        options={{ headerShown: false }}
        component={ChooseRegistrationMethod}
      />
    </Stack.Navigator>
  );
}

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
      navigation.navigate("VerifyEmail");
    }
  };

  return (
    <View style={tw`mt-8`}>
      <FieldLabel text="Nazwa użytkownika zapraszającego" />
      <TextField value={inviter} onChange={setInviter} placeholder="User1234" />
      {!isValid && <ErrorMessage text="Nazwa użytkownika nieprawidłowa" />}
      <ButtonPrimary onClick={onSubmit} disabled={!isValid}>
        Dalej
      </ButtonPrimary>
    </View>
  );
}

function VerifyInviter({ navigation }) {
  return (
    <FormBase text="Podaj nazwę użytkownika, który cię zaprosił do aplikacji">
      <VerifyInviterForm navigation={navigation} />
    </FormBase>
  );
}

function VerifyEmailForm() {
  const { email, setEmail, submit, isValid } = useVerifyEmail();
  return (
    <View>
      <FieldLabel text="Adres email" />
      <TextField
        value={email}
        onChange={setEmail}
        type="email"
        placeholder="email@example.com"
      />
      <ButtonPrimary onClick={() => {}}>Dalej</ButtonPrimary>
    </View>
  );
}

function ChooseRegistrationMethod({ navigation }) {
  return (
    <FormBase text="Zarejestruj się przez Email">
      <View style={tw`mt-5`}>
        <VerifyEmailForm navigation={navigation} />
      </View>
      <Text style={tw`p-5 text-xl font-semibold text-center`}>Lub</Text>
      <ButtonPrimary onClick={() => {}}>Kontynuuj z Google</ButtonPrimary>
      <ButtonPrimary onClick={() => {}}>Kontynuuj z Apple</ButtonPrimary>
    </FormBase>
  );
}
