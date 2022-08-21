import {
  View,
  Text,
  SafeAreaView,
  RefreshControl,
  ScrollView,
} from "react-native";
import React from "react";
import { tw } from "@lib";
import { Card, CardTitle, Chip } from "@components/";
import { IconButton } from "@components/";

export default function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeftContainerStyle: { marginLeft: 10 },
      headerRightContainerStyle: { marginRight: 10 },
      headerRight: () => (
        <IconButton
          name="ios-settings-outline"
          size={30}
          onClick={() => navigation.navigate("Settings")}
          color={tw.color("primary-light")}
        />
      ),
      headerLeft: () => (
        <IconButton
          name="ios-notifications-outline"
          size={30}
          color={tw.color("primary-light")}
        />
      ),
      headerTitleAlign: "center",
      headerLargeTitle: true,
    });
  });

  const wait = (timeout) => {
    return new Promise((resolve) => setTimeout(resolve, timeout));
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  const RoomCard = ({ name, status, tags }) => {
    return (
      <Card pressable>
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
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <RoomCard name="2.30" status="FREE" tags={["2 Fortepiany", "Pulpit"]} />
        <RoomCard
          name="2.29"
          status="BUSY"
          tags={["2 Fortepiany", "2 Pulpity"]}
        />
        <RoomCard
          name="2.28"
          status="UNAVAILABLE"
          tags={["2 Fortepiany", "2 Pulpity"]}
        />
        <RoomCard name="2.27" status="FREE" tags={["2 Fortepiany"]} />
        <RoomCard name="2.26" status="FREE" tags={["2 Fortepiany"]} />
        <RoomCard name="2.25" status="BUSY" tags={["Pianino", "5 Pulpitów"]} />
        <RoomCard name="2.24" status="UNKNOWN" tags={["Harfa"]} />
        <RoomCard name="2.23" status="UNKNOWN" tags={["Harfa"]} />
        <RoomCard name="2.22" status="UNKNOWN" tags={["Harfa"]} />
        <RoomCard name="2.21" status="UNKNOWN" tags={["Harfa"]} />
        <RoomCard name="2.20" status="UNKNOWN" tags={["Harfa"]} />
        <RoomCard name="2.19" status="UNKNOWN" tags={["Harfa"]} />
      </ScrollView>
    </SafeAreaView>
  );
}
