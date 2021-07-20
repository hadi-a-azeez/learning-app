import React from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

export default function SignUp({ navigation }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={styles.heading}>Sign Up</Text>
      <TextInput style={styles.input} placeholder="Enter your name" />
      <TextInput style={styles.input} placeholder="Enter your password" />
      <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: "700",
    marginBottom: 12,
  },
  input: {
    width: "90%",
    paddingLeft: 10,
    color: "#05375a",
    borderWidth: 1,
    padding: 13,
    borderRadius: 5,
    borderColor: "#FF6347",
    marginTop: 15,
    fontSize: 15,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: "#FF6347",
    alignItems: "center",
    marginVertical: 7,
    width: "90%",
    marginTop: 15,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: "bold",
    color: "white",
  },
});
