import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthMethodScreen from "./AuthMethodScreen";
import InviterScreen from "./InviterScreen";
import VerifyEmailScreen from "./VerifyEmailScreen";
import CreatePasswordScreen from "./CreatePasswordScreen";

const Stack = createNativeStackNavigator();

export default function RegisterScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="InviterScreen" component={InviterScreen} />
      <Stack.Screen name="ChooseAuthMethod" component={AuthMethodScreen} />
      <Stack.Screen name="VerifyEmail" component={VerifyEmailScreen} />
      <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} />
    </Stack.Navigator>
  );
}
