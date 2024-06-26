import { StyleSheet, Image, View } from "react-native";
import React from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppButton, AppText } from "@atoms";
import { RootStackProps } from "@router/types";
import { Sizes } from "@theme";

export const Confirmation = ({
  navigation,
  route,
}: RootStackProps<"Confirmation">) => {
  const { amount } = route.params;

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Image
          source={require("@assets/image/success.png")}
          style={styles.image}
        />
        <AppText fontBold big style={styles.text}>
          COMPLETED
        </AppText>
        <AppText gray style={styles.text}>
          You added ${amount} to your Virtual Card
        </AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Done"
          transparent
          onPress={() => navigation.navigate("Home")}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: Sizes.font16,
  },
  text: {
    textAlign: "center",
    marginBottom: Sizes.font16,
  },
  buttonContainer: {
    paddingHorizontal: Sizes.font16,
    paddingBottom: Sizes.font16,
  },
});
