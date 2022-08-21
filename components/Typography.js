import { Text } from "react-native";
import React from "react";
import { tw } from "@lib/";

export default function Typography({ children, style }) {
  return (
    <Text
      style={
        Array.isArray(style)
          ? [tw`dark:text-white text-black`, ...style]
          : [tw`dark:text-white text-black`, style]
      }
    >
      {children}
    </Text>
  );
}
