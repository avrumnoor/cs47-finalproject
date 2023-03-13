import React from "react";
import { Image, StyleSheet, View, SafeAreaView, Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigation";

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
