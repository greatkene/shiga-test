import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader } from "@atoms";
import { useUser } from "@store";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@theme";

export const Home = () => {
  const { userProfile, setUserProfile } = useUser();

  useEffect(() => {
    if (!userProfile) {
      setUserProfile({
        email: "great@gmail.com",
        first_name: "Great",
        last_name: "Kene",
      });
    }
  }, [userProfile, setUserProfile]);

  return (
    <ScreenWrapper>
      <AppHeader
        title="Home"
        icon={<Ionicons name="scan" size={24} color={Colors.white} />}
        // onPress={handleBackPress}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
