import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 50,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 80,
    marginBottom: 30,
    marginTop: 30,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 30,
    gap: 130,
  },
  profileButton: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "white",
    border: "none",
    padding: 5,
    height: 70,
    width: 70,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6.27,
    borderRadius: 50,
  },
  profileButtonText: {
    fontSize: 12,
    color: "lightgrey",
    fontWeight: "800",
    marginTop: 15,
  },
  formButton: {
    backgroundColor: "rgba(255, 178, 102, 0.8)",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
  },
  text: {
    marginLeft: 10,
    fontSize: 13,
    fontWeight: "600",
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.2)",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
});

export default styles;
