import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppText } from "@atoms";
import ScreenWrapper from "@screens/ScreenWrapper";
import { Feather } from "@expo/vector-icons";
import { Colors, Sizes } from "@theme";
import { RootStackProps } from "@router/types";

export const ConfirmDetails = ({
  navigation,
}: RootStackProps<"ConfirmDetails">) => {
  return (
    <ScreenWrapper>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="chevron-left" size={Sizes.font22} color={Colors.white} />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
