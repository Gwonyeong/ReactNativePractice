import React from "react";

import DecisionButtonBox from "../components/items/DecisionButtonBox";
import { StyleSheet, View } from "react-native";
import DecisionInfo from "../components/items/DecisionInfo";

export default function MainPage() {
  return (
    <View style={styles.container}>
      <DecisionInfo />
      <DecisionButtonBox />
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
