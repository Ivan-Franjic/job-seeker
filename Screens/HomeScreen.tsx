import { View, SafeAreaView } from "react-native";
import Navigation from "../Components/Navigation";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Jobs from "../Components/Jobs";
const Tab = createBottomTabNavigator();
export default function HomeScreen({ navigation }: any) {
  return (
    <>
      <SafeAreaView>
        <Jobs />
      </SafeAreaView>
    </>
  );
}
