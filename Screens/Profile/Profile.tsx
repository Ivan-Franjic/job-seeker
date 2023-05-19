import { View, Text, SafeAreaView, Pressable, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./Styles";

export default function Profile({ navigation }: any) {
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        size={30}
        color={"rgba(255, 178, 102, 0.8)"}
        name="person-outline"
      />
      <Image
        style={styles.profileImage}
        source={require("../../assets/login-background.jpg")}
      ></Image>
      <Text>Name</Text>
      <Text>Role</Text>
      <View style={styles.buttonContainer}>
        <View>
          <Pressable
            style={styles.profileButton}
            onPress={() => navigation.navigate("Settings")}
          >
            <Ionicons name="settings" color={"lightgrey"} size={40} />
          </Pressable>
          <Text style={styles.profileButtonText}>SETTINGS</Text>
        </View>
        <View>
          <Pressable
            style={styles.profileButton}
            onPress={() => navigation.navigate("Edit profile")}
          >
            <Ionicons name="pencil-outline" color={"lightgrey"} size={40} />
          </Pressable>
          <Text style={styles.profileButtonText}>EDIT INFO</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
