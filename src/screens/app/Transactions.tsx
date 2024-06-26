import { StyleSheet, Image } from "react-native";
import React from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader, AppText, SearchInput } from "@atoms";

export const Transactions = () => {
  return (
    <ScreenWrapper>
      <AppHeader
        title="Transactions"
        icon={<Image source={require("@assets/icons/calendar.png")} />}
      />

      <SearchInput placeholder="Search transactions" />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
