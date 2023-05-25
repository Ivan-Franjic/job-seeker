import { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screens/Login/Login";
import Navigation from "./Components/Navigation";
import EditProfile from "./Screens/Profile/EditProfile";
import Settings from "./Screens/Profile/Settings";

import { useSelector } from "react-redux";
const Stack = createNativeStackNavigator();

export default function Index() {
  const isLoggedIn = Boolean(useSelector((state: any) => state.user));

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="Edit profile"
          component={EditProfile}
        ></Stack.Screen>
        <Stack.Screen name="Settings" component={Settings}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
