import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function DecisionInfo() {
  return (
    <View style={styles.infoBox}>
      <Text style={styles.title}>오늘 저녁으로 뭘 먹을까요?</Text>
      <Text style={styles.desctiption}>
        치킨을 먹을지 피자를 먹을지 고민이 되네요.. 맛있게 먹으면 살은 안찌지
        않을까요?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoBox: {
    alignItems: "center",
  },
  title: {
    fontSize: 20,
  },
  desctiption: {
    fontSize: 15,
    backgroundColor: "#eee",
    padding: 10,
  },
});
