import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={style.wrap}>
      <Text style={style.title}>Index das tabs</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    color: "red",
  },
  wrap: {
    backgroundColor: "orange",
  },
});
