import { View, Text, Button } from "react-native";
import React from "react";
import { useLogout } from "@hooks/auth";

export default function SettingsScreen() {
  const logout = useLogout();
  return (
    <View>
      <View>
        <Button onPress={() => logout()} title="Logout" />
        <Text>Settings</Text>
      </View>
    </View>
  );
}
