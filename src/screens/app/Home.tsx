import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader, AppText } from "@atoms";
import { useUser } from "@store";

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
      <AppHeader />
      {userProfile && (
        <>
          <AppText>
            Welcome, {userProfile.first_name} {userProfile.last_name}!
          </AppText>
          <AppText>Email: {userProfile.email}</AppText>
        </>
      )}
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({});
