import React, { useState } from "react";
import { Text, TextInput } from "react-native";
import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function Login() {
  const [selectedValue, setSelectedValue] = useState("client");
  return (
    <View
      style={{
        padding: 40,
        margin: "auto",
        backgroundColor: "aliceblue",
        marginTop: 40,
        borderRadius: 10,
      }}
    >
      <Text style={{ fontSize: 25, marginBottom: 20, fontWeight: "bold", textAlign: "center" }}>
        Login To Your Account
      </Text>
      <TextInput
        style={{
          backgroundColor: "lightgray",
          width: 300,
          height: 40,
          borderRadius: 10,
          paddingLeft: 20,
          marginBottom: 20,
        }}
        placeholder="User Name"
        placeholderTextColor={"gray"}
      />
      <TextInput
        style={{
          backgroundColor: "lightgray",
          width: 300,
          height: 40,
          borderRadius: 10,
          paddingLeft: 20,
          marginBottom: 20,
        }}
        placeholder="Password"
        placeholderTextColor={"gray"}
      />
      <Text style={{ marginBottom: -70, fontWeight: "bold", marginLeft: 12}}>
        Choose an account type:{" "}
      </Text>
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
    </View>
  );
}
