import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { AppButton, AppText } from "@atoms";
import ScreenWrapper from "@screens/ScreenWrapper";
import { Colors, Sizes, normalize } from "@theme";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { RootStackProps } from "@router/types";

export const TopUp = ({ navigation }: RootStackProps<"TopUp">) => {
  const [amount, setAmount] = useState("50");

  const handleNumberPress = (num: string) => {
    setAmount((prev) => (prev === "0" ? num : prev + num));
  };

  const handleDeletePress = () => {
    setAmount((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
  };

  return (
    <ScreenWrapper margin={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText fontBold big>
            Top Up
          </AppText>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome5
              name="times"
              size={Sizes.font22}
              color={Colors.white}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: Colors.shigaBG,
            borderRadius: Sizes.font14,
          }}
        >
          <View style={styles.balanceContainer}>
            <View style={styles.currencyContainer}>
              <Image
                source={require("@assets/icons/us.png")}
                style={styles.flag}
              />
              <View>
                <AppText fontMedium semiMedium>
                  US Dollar
                </AppText>
                <AppText gray>$590.95</AppText>
              </View>
            </View>

            <TouchableOpacity style={styles.useMaxButton}>
              <AppText style={styles.useMaxText}>Use Max</AppText>
            </TouchableOpacity>
          </View>
          <View style={styles.amountContainer}>
            <AppText fontBold style={styles.amountText}>
              ${amount}
            </AppText>
          </View>
        </View>
        <View style={styles.destinationContainer}>
          <Image
            source={require("@assets/image/card.png")}
            style={styles.virtualCardIcon}
          />
          <AppText style={styles.destinationText}>For Virtual Card</AppText>
        </View>
        <View style={styles.keypadContainer}>
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0"].map(
            (num) => (
              <TouchableOpacity
                key={num}
                style={styles.key}
                onPress={() => handleNumberPress(num)}
              >
                <AppText style={styles.keyText}>{num}</AppText>
              </TouchableOpacity>
            )
          )}
          <TouchableOpacity style={styles.key} onPress={handleDeletePress}>
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <AppButton disabled title="Continue" />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Sizes.font16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: Sizes.font22,
  },
  balanceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: Sizes.font16,
    borderRadius: Sizes.font8,
    marginBottom: Sizes.font16,
    borderBottomColor: Colors.buttonLightBg,
    borderBottomWidth: 0.5,
  },
  currencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.font12,
  },
  flag: {
    width: normalize(35),
    height: normalize(35),
  },

  useMaxButton: {
    backgroundColor: Colors.iconContainer,
    paddingVertical: Sizes.font4,
    paddingHorizontal: Sizes.font12,
    borderRadius: Sizes.font18,
  },
  useMaxText: {
    color: Colors.white,
    fontSize: Sizes.font12,
  },
  amountContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: Sizes.font34,
    borderRadius: Sizes.font8,
    marginBottom: Sizes.font16,
  },
  amountText: {
    color: Colors.white,
    fontSize: Sizes.font20 * 2,
  },
  destinationContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.shigaBG,
    paddingHorizontal: Sizes.font20,
    paddingVertical: Sizes.font26,
    borderRadius: Sizes.font12,
    marginVertical: Sizes.font16,
  },
  virtualCardIcon: {
    width: Sizes.font22,
    height: Sizes.font22,
    marginRight: Sizes.font8,
  },
  destinationText: {
    color: Colors.white,
    fontSize: Sizes.font16,
  },
  keypadContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: Sizes.font16,
  },
  key: {
    width: "30%",
    margin: "1%",
    // backgroundColor: Colors.border,
    alignItems: "center",
    justifyContent: "center",
    padding: Sizes.font16,
    borderRadius: Sizes.font8,
  },
  keyText: {
    color: Colors.white,
    fontSize: Sizes.font22,
  },
  continueButton: {
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    padding: Sizes.font16,
    borderRadius: Sizes.font8,
  },
  continueButtonText: {
    color: Colors.white,
    fontSize: Sizes.font18,
    fontWeight: "bold",
  },
});
