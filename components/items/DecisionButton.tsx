import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../styles/Button";

interface Props {
  onPress: (buttonName: string) => void;
  buttonName: string;
  isLeftButton: boolean;
}

export default function DecisionButton(props: Props) {
  return (
    <TouchableOpacity
      style={[
        buttonStyles.decisionButton,
        props.isLeftButton ? buttonStyles.leftButton : buttonStyles.rightButton,
      ]}
      onPress={() => props.onPress(props.buttonName)}
    >
      <Text>{props.buttonName}</Text>
    </TouchableOpacity>
  );
}
