import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import React, { useEffect } from "react";
import ScreenWrapper from "@screens/ScreenWrapper";
import { AppHeader, AppText } from "@atoms";
import { useUser } from "@store";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Colors, RPW, Sizes, verticalScale } from "@theme";
import { ServiceOptionCard } from "@molecules";

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
    <ScreenWrapper margin={false}>
      <AppHeader
        title="Home"
        icon={<Ionicons name="scan" size={Sizes.font26} color={Colors.white} />}
      />
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.balanceContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <AppText style={styles.balanceText}>USD Balance</AppText>
            <Image source={require("@assets/icons/dropdown-flag.png")} />
          </View>
          <AppText style={styles.balanceAmount} fontBold>
            $10,800.10
          </AppText>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <AppText semiMedium centered white>
                Add Money
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <AppText semiMedium centered white>
                Transfer
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={require("@assets/icons/option-1.png")} />
            <View>
              <AppText style={styles.optionText}>Bank Account</AppText>
              <AppText gray>Show account info</AppText>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Image source={require("@assets/icons/option-2.png")} />

            <View>
              <AppText style={styles.optionText}>Pay Bills</AppText>
              <AppText gray>Top-Up & utilities</AppText>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.extraOptionsContainer}>
          <AppText fontBold semiMedium style={styles.extraOptionsTitle}>
            Do more with Shiga
          </AppText>
          <ServiceOptionCard
            image={require("@assets/icons/convert.png")}
            title="Convert Money"
            subTitle="Swap between currencies"
            icon={
              <Entypo
                name="dots-three-vertical"
                size={Sizes.font20}
                color={Colors.subText}
              />
            }
            onPress={() => console.log("first")}
          />

          <ServiceOptionCard
            image={require("@assets/icons/tuition.png")}
            title="Tuition Payment"
            subTitle="Pay your tuition in seconds"
            icon={
              <Ionicons
                name="chevron-forward"
                size={Sizes.font20}
                color={Colors.subText}
              />
            }
            onPress={() => console.log("first")}
          />

          <ServiceOptionCard
            image={require("@assets/icons/merchant.png")}
            title="Merchant"
            subTitle="Pay your suppliers globally"
            icon={
              <Ionicons
                name="chevron-forward"
                size={Sizes.font20}
                color={Colors.subText}
              />
            }
            onPress={() => console.log("first")}
          />
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginTop: Sizes.font12,
  },
  balanceContainer: {
    backgroundColor: Colors.bgLight,
    padding: Sizes.font16,
    borderRadius: Sizes.borderRadius,
    marginBottom: Sizes.font16,
    marginHorizontal: Sizes.font12,
  },
  balanceText: {
    color: Colors.white,
    fontSize: Sizes.font16,
  },
  balanceAmount: {
    marginVertical: Sizes.font8,
    fontSize: Sizes.font34,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: Colors.buttonLightBg,
    paddingVertical: Sizes.font12,
    paddingHorizontal: Sizes.font26,
    borderRadius: Sizes.borderRadius,
    marginTop: Sizes.font8,
    width: RPW(42),
  },
  optionsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: Sizes.font16,
    marginHorizontal: Sizes.font12,
  },
  optionButton: {
    backgroundColor: Colors.bgLight,
    flex: 1,
    padding: Sizes.font16,
    borderRadius: Sizes.font10,
    marginHorizontal: Sizes.font8,
    height: verticalScale(130),
    flexDirection: "column",
    justifyContent: "space-between",
  },
  optionText: {
    marginTop: Sizes.font8,
  },
  extraOptionsContainer: {
    marginTop: Sizes.font16,
    backgroundColor: "#171819",
    paddingVertical: Sizes.font30,
    paddingHorizontal: Sizes.font12,
    flexDirection: "column",
    gap: Sizes.font26,
    marginBottom: Sizes.font34,
  },
  extraOptionsTitle: {
    marginBottom: Sizes.font8,
  },
  extraOptionButton: {
    backgroundColor: Colors.bgLight,
    flexDirection: "row",
    alignItems: "center",
    padding: Sizes.font16,
    borderRadius: Sizes.borderRadius,
    marginVertical: Sizes.font4,
  },
  extraOptionText: {
    color: Colors.white,
    marginLeft: Sizes.font16,
  },
});
