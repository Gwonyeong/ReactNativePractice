import { StyleSheet, Text, View } from "react-native";
import MainPage from "./components/page/MainPage";

export default function App() {
  return (
    <View style={styles.container}>
      <MainPage />
      <Text>새로운 앱!</Text>
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
