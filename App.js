import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, Auth } from "./screens";
const Stack = createNativeStackNavigator();

const isSignedIn = false;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isSignedIn ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Auth.LoginScreen}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
