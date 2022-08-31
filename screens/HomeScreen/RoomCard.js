import { View } from "react-native";
import React from "react";

import { Card, CardTitle, Chip } from "@components/";

export default function RoomCard({ name, status, tags = [], onPress }) {
  return (
    <Card pressable onPress={onPress}>
      <CardTitle text={name} />
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "flex-end",
        }}
      >
        <Chip
          text={
            status === "FREE"
              ? "Wolna"
              : status === "BUSY"
              ? "Zajęta"
              : status === "UNAVAILABLE"
              ? "Niedostępna"
              : "Brak danych"
          }
          severity={
            status === "FREE"
              ? "success"
              : status === "BUSY"
              ? "warning"
              : status === "UNAVAILABLE"
              ? "error"
              : "info"
          }
        />
        {tags.length > 0 && (
          <Chip text={tags[0]} styles={{ root: { marginLeft: "auto" } }} />
        )}
        {tags.slice(1).map((e) => (
          <Chip text={e} />
        ))}
      </View>
    </Card>
  );
}
