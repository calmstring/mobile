import { ScrollView } from "react-native";
import React from "react";
import { useLogout } from "@hooks/auth";
import { ButtonSecondary } from "@components/";

export default function SettingsScreen() {
  const logout = useLogout();
  return (
    <ScrollView>
      <ButtonSecondary onClick={() => logout()}>Wyloguj</ButtonSecondary>
    </ScrollView>
  );
}
