import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthMethodScreen from "./AuthMethodScreen";
import InviterScreen from "./InviterScreen";
import VerifyEmailScreen from "./VerifyEmailScreen";
import CreatePasswordScreen from "./CreatePasswordScreen";

const Stack = createNativeStackNavigator();

export default function RegisterScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="InviterScreen"
        options={{ headerShown: false }}
        component={InviterScreen}
      />
      <Stack.Screen
        name="ChooseAuthMethod"
        options={{ headerShown: false }}
        component={AuthMethodScreen}
      />
      <Stack.Screen
        name="VerifyEmail"
        options={{ headerShown: false }}
        component={VerifyEmailScreen}
      />
      <Stack.Screen
        name="CreatePassword"
        options={{ headerShown: false }}
        component={CreatePasswordScreen}
      />
    </Stack.Navigator>
  );
}
