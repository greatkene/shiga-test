import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { AppButton, AppText, ScrollContainer } from "@atoms";
import ScreenWrapper from "@screens/ScreenWrapper";
import { Feather } from "@expo/vector-icons";
import { Colors, Sizes, normalize, verticalScale } from "@theme";
import { RootStackProps } from "@router/types";
import { useUser } from "@store";

export const ConfirmDetails = ({
  navigation,
  route,
}: RootStackProps<"ConfirmDetails">) => {
  const { amount } = route.params;
  const { userProfile, deductBalance } = useUser();
  const transactionAmount = parseFloat(amount);
  const issuanceFee = 5;
  const totalDebit = transactionAmount + issuanceFee;

  const handleConfirmAndPay = () => {
    deductBalance(totalDebit);
    navigation.navigate("Confirmation");
  };

  const transactionDetails = [
    { label: "You will receive", value: `$${amount}` },
    { label: "Issuance fee", value: `$${issuanceFee.toFixed(2)}` },
    { label: "Transaction Type", value: "Card Creation" },
    { label: "Total Debit", value: `$${totalDebit.toFixed(2)}` },
  ];

  return (
    <ScreenWrapper>
      <ScrollContainer>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather
            name="chevron-left"
            size={Sizes.font22}
            color={Colors.white}
          />
        </TouchableOpacity>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Feather name="arrow-up" size={Sizes.font45} color={Colors.white} />
          </View>
          <AppText big fontBold style={{ marginTop: Sizes.font16 }}>
            Confirm Details for Virtual Card Creation
          </AppText>

          <View style={styles.detailsContainer}>
            {transactionDetails.map((item, index) => (
              <View key={index} style={styles.detailRow}>
                <AppText gray>{item.label}</AppText>
                <AppText fontBold>{item.value}</AppText>
              </View>
            ))}
          </View>
        </View>
      </ScrollContainer>
      <View style={{ flexDirection: "column", gap: Sizes.font11 * 2 }}>
        <AppText gray small centered>
          Please note once you tap "Confirm & Pay" this transaction cannot be
          reversed
        </AppText>
        <AppButton title="Confirm & Pay" onPress={handleConfirmAndPay} />
      </View>
    </ScreenWrapper>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: verticalScale(60),
  },
  iconContainer: {
    width: normalize(55),
    height: normalize(55),
    borderRadius: Sizes.font30 * 2,
    backgroundColor: Colors.iconContainer,
    alignItems: "center",
    justifyContent: "center",
  },
  detailsContainer: {
    marginTop: Sizes.font22,
    borderRadius: Sizes.font16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Sizes.font11,
  },
});
