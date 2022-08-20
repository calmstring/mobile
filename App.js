import { useColorScheme, StatusBar, Platform } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Auth } from "./screens";
import { CompleteSignUp } from "./screens/auth";
import { useDeviceContext } from "twrnc";
import { tw } from "@lib/";
import { store } from "./store";
import { Provider } from "react-redux";
import { useIsUserLogedIn } from "@hooks/auth";
import { Suspense } from "@components/";

const Stack = createNativeStackNavigator();

const NavDarkTheme = {
  dark: true,
  colors: {
    background: tw.color("neutral-800"),
    card: tw.color("neutral-900"),
    notification: tw.color("bg-zinc-100"),
    text: tw.color("text-text-light"),
    border: tw.color("neutral-600"),
  },
};

export default function App() {
  useDeviceContext(tw);
  const scheme = useColorScheme();
  const isIos = Platform.OS === "ios";

  const isDark = scheme === "dark";

  return (
    <>
      <StatusBar
        barStyle={isDark ? "light-content" : "dark-content"}
        backgroundColor={isDark ? tw.color("neutral-900") : "#fff"}
      />
      <Provider store={store}>
        <NavigationContainer theme={isDark ? NavDarkTheme : DefaultTheme}>
          <AppNavigation />
        </NavigationContainer>
      </Provider>
    </>
  );
}

function AppNavigation() {
  const { isLoggedIn, isLoading } = useIsUserLogedIn();

  if (isLoading) {
    return <Suspense />;
  }
  return (
    <Stack.Navigator card>
      {isLoggedIn ? (
        <>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Calmstring"
            component={HomeScreen}
          />
          <Stack.Screen
            name="CompleteSignUp"
            options={{ title: "Dokończ konfigurację konta" }}
            component={CompleteSignUp}
          />
        </>
      ) : (
        <Stack.Screen
          options={{ headerShown: false }}
          name="Auth"
          component={Auth}
        />
      )}
    </Stack.Navigator>
  );
}
