import { View, Text } from "react-native";
import React from "react";
import Typography from "./Typography";
import { tw } from "@lib";

export default function Chip({ text, severity = "", styles = {} }) {
  const getSeverityStyle = () => {
    switch (severity) {
      case "info":
        return tw`bg-blue-100 dark:bg-blue-800`;
      case "success":
        return tw`bg-green-200 border-green-600`;
      case "warning":
        return tw`bg-amber-200 border-amber-500`;
      case "error":
        return tw`bg-red-100 border-red-400`;
      default:
        return tw`bg-gray-200 border-gray-500 dark:bg-gray-800`;
    }
  };

  return (
    <View style={[{ alignItems: "flex-start" }, styles.root]}>
      <View
        style={[
          tw`border rounded-full p-1 px-2 my-0.5 mr-0.75 text-center`,
          getSeverityStyle(),
          styles.content,
          {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <Typography style={styles.text}>{text}</Typography>
      </View>
    </View>
  );
}
