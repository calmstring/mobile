import { Chip } from "@components/";
import React from "react";

export default function RoomAvailabilityChip({ status }) {
  return (
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
  );
}
