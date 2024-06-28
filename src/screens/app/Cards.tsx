import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader, AppText } from "@atoms";
import { Colors, RPW, Sizes } from "@theme";
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackProps } from "@router/types";

export const Cards = ({ navigation }: RootStackProps<"Cards">) => {
  const [isCardFrozen, setIsCardFrozen] = useState(false);

  const toggleCardFreeze = () => setIsCardFrozen(!isCardFrozen);

  return (
    <ScreenWrapper>
      <AppHeader title="" />
      <View style={styles.header}>
        <AppText style={{ fontSize: Sizes.font34 }} big fontBold>
          $50
        </AppText>
        <AppText gray>Available to spend</AppText>
      </View>

      <View style={styles.cardContainer}>
        <Image
          source={require("@assets/image/card.png")}
          style={styles.cardImage}
        />
      </View>

      <View style={styles.actionsContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("TopUp")}
          style={styles.actionButton}
        >
          <AppText centered style={styles.actionButtonText}>
            Top Up
          </AppText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <AppText centered style={styles.actionButtonText}>
            Withdraw
          </AppText>
        </TouchableOpacity>
      </View>

      <View style={styles.manageCardContainer}>
        <AppText style={styles.manageCardText}>MANAGE CARD</AppText>
        <View style={styles.manageCardOption}>
          <AppText style={styles.manageCardOptionText}>Card Details</AppText>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={24}
            color={Colors.subText}
          />
        </View>
        <View style={styles.manageCardOption}>
          <AppText style={styles.manageCardOptionText}>Freeze Card</AppText>
          <Switch
            value={isCardFrozen}
            onValueChange={toggleCardFreeze}
            thumbColor={isCardFrozen ? Colors.primary : Colors.subText}
          />
        </View>
        <View style={styles.manageCardOption}>
          <AppText style={styles.manageCardOptionText}>Delete Card</AppText>
          <MaterialIcons
            name="delete-outline"
            size={24}
            color={Colors.subText}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    marginVertical: Sizes.font16,
  },

  cardContainer: {
    alignItems: "center",
    marginVertical: Sizes.font16,
  },
  cardImage: {
    width: RPW(85),
  },
  actionsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: Sizes.font16,
  },
  actionButton: {
    backgroundColor: Colors.buttonLightBg,
    paddingVertical: Sizes.font12,
    paddingHorizontal: Sizes.font26,
    borderRadius: Sizes.borderRadius,
    marginTop: Sizes.font8,
    width: RPW(42),
  },
  actionButtonText: {
    color: Colors.white,
    fontSize: Sizes.font16,
  },
  manageCardContainer: {
    marginVertical: Sizes.font16,
  },
  manageCardText: {
    marginLeft: Sizes.font16,
    marginBottom: Sizes.font8,
  },
  manageCardOption: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Sizes.font12,
    paddingHorizontal: Sizes.font16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
  },
  manageCardOptionText: {
    color: Colors.white,
    fontSize: Sizes.font16,
  },
});
