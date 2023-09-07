import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: width,
    height: height,
    borderRadius: 30,
    marginBottom: 10,
  },
});

export default styles;
