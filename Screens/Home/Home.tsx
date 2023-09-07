import { View, SafeAreaView, Image, Pressable, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./Styles";
export default function HomeScreen() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.image}
          source={require("../../assets/login-background.jpg")}
        ></Image>
        <View>
          <Text>Company name</Text>
          <Text>Position</Text>
          <Text>Location</Text>
        </View>
        <View>
          <Pressable>
            <Ionicons size={40} color={"rgb(255, 0, 0)"} name="close-outline" />
          </Pressable>
          <Pressable>
            <Ionicons
              size={40}
              color={"rgb(60, 179, 113)"}
              name="heart-circle-outline"
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}
