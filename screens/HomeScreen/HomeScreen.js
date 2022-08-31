import { SafeAreaView } from "react-native";
import React from "react";
import { tw } from "@lib";
import { IconButton } from "@components/";
import RoomsList from "./RoomsList";

export default function HomeScreen({ navigation }) {
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RoomsList navigation={navigation} />
    </SafeAreaView>
  );
}
