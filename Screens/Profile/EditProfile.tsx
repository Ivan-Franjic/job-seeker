import { View, Text, SafeAreaView, TextInput, Pressable } from "react-native";
import styles from "./Styles";

export default function EditProfile() {
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Name"
        placeholderTextColor="black"
        style={styles.textInput}
      />
      <TextInput
        placeholder="Role"
        placeholderTextColor="black"
        style={styles.textInput}
      />
      <Text style={styles.text}>CHANGE PASSWORD</Text>
      <TextInput
        placeholder="Old password"
        placeholderTextColor="black"
        style={styles.textInput}
      />
      <TextInput
        placeholder="New password"
        placeholderTextColor="black"
        style={styles.textInput}
      />
      <Pressable style={styles.formButton}>
        <Text style={styles.formButtonText}>SAVE CHANGES</Text>
      </Pressable>
    </SafeAreaView>
  );
}
