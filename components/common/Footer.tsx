import React from "react";
import { Text, View } from "react-native";

export default function Footer() {
  return (
    <View
      style={{
        display: "flex",
        backgroundColor: "#12705f",
        padding: 20,
        marginBottom: 40,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "white", fontWeight: "bold" }}>
        Copyright © {new Date().getFullYear()} Instructor Diary Services
      </Text>
    </View>
  );
}
