import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Auth } from "./screens";
import { useDeviceContext } from "twrnc";
import { tw } from "@lib/";
import { store } from "./store";
import { Provider } from "react-redux";

const Stack = createNativeStackNavigator();

const isSignedIn = false;

const NavigatorTheme = {
  ...DefaultTheme,
  colors: {
    background: tw`bg-stone-100`.backgroundColor,
  },
};

export default function App() {
  useDeviceContext(tw, { withDeviceColorScheme: false });
  return (
    <Provider store={store}>
      <NavigationContainer theme={NavigatorTheme}>
        <Stack.Navigator card>
          {isSignedIn ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <Stack.Screen
              options={{ headerShown: false }}
              name="Auth"
              component={Auth}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
