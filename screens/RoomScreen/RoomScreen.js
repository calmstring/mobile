import { View, ScrollView, RefreshControl } from "react-native";
import React from "react";
import { useRoomDetailQuery } from "@services/roomApi";

import { Typography, Chip, ButtonPrimary, ButtonSecondary } from "@components/";
import { RoomAvailabilityChip } from "@containers/";
import { tw } from "@lib/";

export default function RoomScreen({ route, navigation }) {
  const { uuid, events_room_uuid, name } = route.params;

  const { data, isLoading, isFetching, refetch } = useRoomDetailQuery(uuid);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: name,
      headerTitleAlign: "center",
      headerLargeTitle: true,
    });
  });
  return (
    <ScrollView
      style={[{ flex: 1 }, tw`m-2`]}
      refreshControl={
        <RefreshControl
          refreshing={isLoading || isFetching}
          onRefresh={refetch}
        />
      }
    >
      <Typography>{data?.description}</Typography>
      <View style={tw`pt-2`}>
        <RoomAvailabilityChip status={data?.status} />
      </View>
    </ScrollView>
  );
}
