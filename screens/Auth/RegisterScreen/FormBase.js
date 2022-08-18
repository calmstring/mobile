import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { Logo } from "@components/";
import { tw } from "@lib";

export default function FormBase({ text, children }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View>
        <View style={tw`flex  items-center py-3`}>
          <Logo bare />
          <Text style={tw`text-2xl font-semibold text-center`}>
            {text || "Zarejestruj się do Calmstring"}
          </Text>
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
}
