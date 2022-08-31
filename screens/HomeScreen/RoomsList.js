import { ScrollView, RefreshControl } from "react-native";
import React from "react";
import RoomCard from "./RoomCard";
import { useGetRoomsQuery } from "@services/roomApi";

export default function RoomsList({ navigation }) {
  const { isLoading, isFetching, refetch, data } = useGetRoomsQuery();

  const onItemPress = ({ uuid, events_room_uuid, name }) => {
    navigation.navigate("Room", {
      uuid,
      events_room_uuid,
      name,
    });
  };

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl
          refreshing={isLoading || isFetching}
          onRefresh={refetch}
        />
      }
    >
      {data?.map((e) => (
        <RoomCard
          onPress={() =>
            onItemPress({
              uuid: e.uuid,
              events_room_uuid: e.events_room_uuid,
              name: e.name,
            })
          }
          name={e.name}
          key={e.uuid}
          status={e.availability}
        />
      ))}
    </ScrollView>
  );
}
