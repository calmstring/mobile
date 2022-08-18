import { View, Text } from "react-native";
import React from "react";
import { tw } from "@lib/";

export default function FieldMessage({ text, style, severity }) {
  return (
    <View>
      <Text
        style={[
          tw.style(
            "pl-2",
            severity === "info" && "text-black",
            severity === "error" && "text-red-500"
          ),
          style,
        ]}
      >
        {text}
      </Text>
    </View>
  );
}
