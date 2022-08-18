import { View, Text } from "react-native";
import React from "react";
import { tw } from "@lib/";

export default function ErrorMessage({ text, style }) {
  return (
    <View>
      <Text style={[tw`text-red-500 pl-2`, style]}>{text}</Text>
    </View>
  );
}
