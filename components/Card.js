import { View, Text, TouchableOpacity } from "react-native";
import { tw } from "@lib/";
import React from "react";

export default function Card({
  children,
  pressable = false,
  onPress = () => {},
  styles = { root: {}, content: {} },
}) {
  const styleRoot = [
    tw`border border-gray-300 dark:border-stone-700 bg-gray-100 dark:bg-stone-800 rounded m-2`,
    styles.root,
  ];

  const contentStyle = [tw`pl-3 pt-2 pb-2 pr-3`, styles.content];

  const Content = () => <View style={contentStyle}>{children}</View>;

  return pressable ? (
    <TouchableOpacity onPress={onPress} style={styleRoot}>
      <Content />
    </TouchableOpacity>
  ) : (
    <View style={styleRoot}>
      <Content />
    </View>
  );
}

export const CardTitle = ({ text }) => (
  <Text style={tw`pb-5 font-bold text-3xl text-left dark:text-white`}>
    {text}
  </Text>
);
