import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUp";
import CompleteSignUp from "./CompleteSignUp";

export { LoginScreen, CompleteSignUp };

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
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
}
