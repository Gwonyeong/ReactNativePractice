import React from "react";
import { Button, Text, View } from "react-native";
import * as ButtonStyle from "../styles/Button";

export default function MainPage() {
  return (
    <View>
      <Button
        color={ButtonStyle.buttonStyles.greenButton.color}
        title="버튼"
        onPress={() => alert("버튼 클릭!")}
      />
    </View>
  );
}
