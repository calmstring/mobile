import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreenContent from "./HomeScreen";
import SettingsScreen from "../SettingsScreen";

import { useNavigateToCompleteSignUp } from "@hooks";

const Stack = createNativeStackNavigator();

const HomeScreen = ({ navigation }) => {
  useNavigateToCompleteSignUp();
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen name="Sale" component={HomeScreenContent} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="O Aplikacji" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
