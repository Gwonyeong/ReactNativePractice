import React from "react";
import { Alert, Button, Text, TouchableOpacity, View } from "react-native";
import * as ButtonStyle from "../styles/Button";
import DecisionButton from "./DecisionButton";

export default function DecisionButtonBox() {
  const onPressButton = (buttonName: string) => {
    Alert.alert(
      `${buttonName}`, // 대화 상자의 제목
      "이 곳에 투표합니다!", // 대화 상자의 본문
      [
        {
          text: "취소",
          onPress: () => console.log("삭제 취소"),
          style: "cancel",
        },
        {
          text: "확인",
          onPress: () => console.log("삭제 확인"),
          // style이 'destructive'인 경우 iOS에서는 텍스트 색상이 빨간색으로 표시됩니다.
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <View
      style={{
        flex: 0.3,
        width: "100%",

        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        // justifyContent: "center",
      }}
    >
      <DecisionButton
        onPress={onPressButton}
        buttonName="죽어도 치킨"
        isLeftButton={true}
      />
      <DecisionButton
        onPress={onPressButton}
        buttonName="사실 피자보다 치킨이 땡김"
        isLeftButton={false}
      />
    </View>
  );
}
