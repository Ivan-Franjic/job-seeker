import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login/Login";
import Navigation from "./Components/Navigation";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="Navigation"
            component={Navigation}
            options={{ headerShown: false }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
