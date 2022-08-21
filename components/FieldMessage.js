import { View, Text } from "react-native";
import React from "react";
import { tw } from "@lib/";
import Typography from "./Typography";

export default function FieldMessage({ text, style, severity }) {
  return (
    <View>
      <Typography
        style={[
          tw.style("pl-2", severity === "error" && "text-red-500"),
          style,
        ]}
      >
        {text}
      </Typography>
    </View>
  );
}
