import { View, Text } from "react-native";
import React from "react";
import { tw } from "@lib/";
import Typography from "./Typography";

export default function FieldLabel({ text, style }) {
  return (
    <Typography style={tw.style("text-base font-bold ml-2", style)}>
      {text}
    </Typography>
  );
}
