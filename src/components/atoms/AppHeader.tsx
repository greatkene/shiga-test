import { StyleSheet, View } from "react-native";
import React from "react";
import { AppText } from "./AppText";
import { Colors } from "@theme";

export const AppHeader = () => {
  return (
    <View>
      <AppText>AppHeader</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  initialContainer: {
    backgroundColor: Colors.secondary,
  },
});
