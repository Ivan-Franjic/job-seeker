import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Screens/Login/Login";
import BottomTabNavigator from "./BottomTabNavigator";
import { RootState } from "../../App";
import { useSelector } from "react-redux";

const Stack = createNativeStackNavigator();

export default function Navigator() {
  const isLoggedIn = Boolean(
    useSelector((state: RootState) => state.auth.user)
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {isLoggedIn ? (
          <Stack.Screen
            name="Home"
            component={BottomTabNavigator}
            options={{ headerShown: false }}
          />
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
