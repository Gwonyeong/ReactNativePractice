import React from "react";

import DecisionButtonBox from "../components/items/DecisionButtonBox";
import { StyleSheet, Text, View } from "react-native";
import DecisionInfo from "../components/items/DecisionInfo";

export default function MainPage() {
  return (
    <View style={styles.container}>
      <DecisionInfo />
      <DecisionButtonBox />

      <Text>여기쯤에 광고</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
