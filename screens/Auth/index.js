import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";

export { LoginScreen };

const Stack = createNativeStackNavigator();

export default function Auth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        options={{ title: "Logowanie" }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        options={{ title: "Rejestracja" }}
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
}
