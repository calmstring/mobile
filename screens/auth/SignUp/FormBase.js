import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { Logo } from "@components/";
import { tw } from "@lib/";

export default function FormBase({ text, children }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={tw`flex  items-center py-3 pt-7`}>
          <Logo bare />
          <Text
            style={tw`text-2xl font-semibold text-center text-text-dark dark:text-text-light`}
          >
            {text || "Zarejestruj się do Calmstring"}
          </Text>
        </View>
        <View style={tw`mt-8`}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );
}
