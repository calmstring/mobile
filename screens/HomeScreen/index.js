import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

import HomeScreenContent from "./HomeScreen";
import SettingsScreen from "../SettingsScreen";
import { tw } from "@lib/";

import { useNavigateToCompleteSignUp } from "@hooks";

const Drawer = createDrawerNavigator();

const HomeScreen = ({ navigation }) => {
  useNavigateToCompleteSignUp();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerInactiveTintColor: tw`dark:text-text-light light:text-text-dark`
          .color,
        drawerActiveTintColor:
          tw`dark:text-primary-dark light:text-secondary-light`.color,
      }}
    >
      <Drawer.Screen
        name="Strona główna"
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" color={color} size={size} />
          ),
        }}
        component={HomeScreenContent}
      />
      <Drawer.Screen
        name="Ustawienia"
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="gear" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
      <Drawer.Screen
        name="O Aplikacji"
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome5 name="info-circle" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};

export default HomeScreen;
