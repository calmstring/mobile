import React from "react";
import BaseButton from "./BaseButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import { tw } from "@lib";

export default function IconButton({
  name,
  styles = {},
  size = 30,
  color,
  ...props
}) {
  return (
    <BaseButton
      renderText={false}
      styles={{ root: tw.style("flex-none p-0 m-0") }}
      {...props}
    >
      <Ionicons style={styles.icon} name={name} size={size} color={color} />
    </BaseButton>
  );
}
