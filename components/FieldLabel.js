import { View, Text } from "react-native";
import React from "react";
import { tw } from "@lib/";

export default function FieldLabel({ text, style }) {
  return <Text style={[tw`text-base font-bold ml-2`, style]}>{text}</Text>;
}
