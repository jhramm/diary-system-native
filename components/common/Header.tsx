import React from "react";
import { Text, View, Image } from "react-native";

export default function Header({ title }: { title: string }) {
  return (
    <View
      style={{
        height: 200,
        backgroundColor: "#12705f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../../assets/images/logo-top.png")}
        style={{ width: 135, height: 90, marginTop: 10, marginBottom: 10 }}
      />
      <Text style={{ fontSize: 30, color: "white", textAlign: "center" }}>
        {title}
      </Text>
    </View>
  );
}
