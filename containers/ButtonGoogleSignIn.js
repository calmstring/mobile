import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { Button } from "@components/Buttons";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { tw } from "@lib";

import { expoClientId, iosClientId, androidClientId } from "@constants/google";

WebBrowser.maybeCompleteAuthSession();

/**
 * Class used to handle the Google Sign In button.
 * @param {func} onSignIn
 * @returns {JSX.Element}
 */
export default function ButtonGoogleSignIn({ onSignIn, text }) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId,
    iosClientId,
    androidClientId,
  });

  useEffect(() => {
    if (response?.type === "success") {
      onSignIn(response);
    }
  }, [response]);

  return (
    <Button
      styles={{ root: tw`bg-blue-500 text-black p-0.8 rounded-sm ` }}
      renderText={false}
      onClick={() => {
        promptAsync({ shoInRevents: true });
      }}
    >
      <View style={tw`flex-row items-center`}>
        <View style={tw`p-2.8 bg-white rounded-sm`}>
          <Image
            source={require("../assets/google.png")}
            style={{ height: 30, width: 30 }}
          />
        </View>
        <Text
          style={tw`pl-6 
            text-xl
            font-semibold
            text-center
            text-stone-100`}
        >
          {text || "Zarejestruj się przez Google"}
        </Text>
      </View>
    </Button>
  );
}
