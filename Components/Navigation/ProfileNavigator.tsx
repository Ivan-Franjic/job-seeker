import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EditProfile from "../../Screens/Profile/EditProfile";
import Settings from "../../Screens/Profile/Settings";
import Profile from "../../Screens/Profile/Profile";

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Edit profile"
        component={EditProfile}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
