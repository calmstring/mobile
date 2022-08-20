import { ActivityIndicator, SafeAreaView, Platform } from "react-native";
import { tw } from "@lib/";

export default function Suspense() {
  const isAndroid = Platform.OS === "android";
  return (
    <SafeAreaView
      style={[
        tw`bg-background-light dark:bg-background-dark`,
        { flex: 1, justifyContent: "center" },
      ]}
    >
      <ActivityIndicator
        size="large"
        {...(isAndroid && { color: tw.color("primary-light") })}
      />
    </SafeAreaView>
  );
}
