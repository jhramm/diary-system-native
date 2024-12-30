import React, { useState } from "react";
import { Text, TextInput, StyleSheet } from "react-native";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LinearGradient } from "expo-linear-gradient";

export default function Login() {
  const [selectedValue, setSelectedValue] = useState("client");

  return (
    <LinearGradient
      colors={["#12705f", "#29dbba"]}
      style={styles.container}
    >
      <Text style={styles.title}>Login To Your Account</Text>
      <TextInput
        style={styles.input}
        placeholder="User Name"
        placeholderTextColor={"#12705f"}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={"#12705f"}
      />
      <Text style={styles.accountTypeText}>Choose an account type:</Text>
      <Picker
        selectionColor={"gray"}
        selectedValue={selectedValue}
        onValueChange={(item) => setSelectedValue(item)}
        style={{ color: "black" }}
        dropdownIconColor={"#000"}
        mode="dropdown"
      >
        <Picker.Item label="Client" value="client" color="black" />
        <Picker.Item label="Instructor" value="instructor" color="black" />
        <Picker.Item label="Operator" value="operator" color="black" />
        <Picker.Item label="Pupil" value="pupil" color="black" />
      </Picker>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    margin: "auto",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#FF0800",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    fontWeight: "bold",
    marginLeft: 3,
    color: "white",
  },
  input: {
    backgroundColor: "lightgray",
    width: 300,
    height: 40,
    borderRadius: 10,
    paddingLeft: 20,
    marginBottom: 20,
  },
  accountTypeText: {
    marginBottom: -70,
    fontWeight: "bold",
    marginLeft: 12,
    color: "white",
  },
});
