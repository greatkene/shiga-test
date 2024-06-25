import { Colors, FontFamily, Sizes } from "@theme";
import React from "react";
import { StyleSheet, Text, View, StyleProp, TextStyle } from "react-native";

interface AppTextProps {
  children: React.ReactNode;
  small?: boolean;
  big?: boolean;
  semiMedium?: boolean;
  medium?: boolean;
  semiBig?: boolean;
  underlined?: boolean;
  capitalized?: boolean;
  uppercase?: boolean;
  centered?: boolean;
  black?: boolean;
  lightBlack?: boolean;
  red?: boolean;
  xs?: boolean;
  xxs?: boolean;
  white?: boolean;
  gray?: boolean;
  success?: boolean;
  mainColor?: boolean;
  fontBold?: boolean;
  fontMedium?: boolean;
  fontRegular?: boolean;
  style?: StyleProp<TextStyle>;
}

export const AppText: React.FC<AppTextProps> = ({
  children,
  small,
  xs,
  xxs,
  big,
  semiMedium,
  medium,
  semiBig,
  underlined,
  capitalized,
  uppercase,
  centered,
  black,
  red,
  white,
  gray,
  success,
  mainColor,
  lightBlack,
  fontBold,
  fontMedium,
  fontRegular,
  style,
}) => {
  const fontFamilyStyle = fontBold
    ? { fontFamily: FontFamily.sansBold }
    : fontMedium
    ? { fontFamily: FontFamily.sansMedium }
    : fontRegular
    ? { fontFamily: FontFamily.sansRegular }
    : {};

  return (
    <View>
      <Text
        style={[
          styles.text,
          small && styles.small,
          xs && styles.xs,
          xxs && styles.xxs,
          big && styles.big,
          semiMedium && styles.semiMedium,
          semiBig && styles.semiBig,
          centered && styles.centered,
          capitalized && styles.capitalized,
          uppercase && styles.upppercase,
          underlined && styles.underlined,
          medium && styles.medium,
          red && styles.red,
          white && styles.white,
          black && styles.black,
          gray && styles.gray,
          success && styles.success,
          mainColor && styles.mainColor,
          lightBlack && styles.lightBlack,
          fontFamilyStyle,
          style,
        ]}
      >
        {children}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: Sizes.font14,
    color: Colors.white,
    fontFamily: FontFamily.sansRegular,
  },
  small: {
    fontSize: Sizes.font12,
  },
  xxs: {
    fontSize: Sizes.font8,
  },
  xs: {
    fontSize: Sizes.font10,
  },
  semiMedium: {
    fontSize: Sizes.font16,
  },
  big: {
    fontSize: Sizes.font20,
  },
  semiBig: {
    fontSize: Sizes.font18,
  },
  medium: {
    fontSize: Sizes.font18,
  },
  centered: {
    textAlign: "center",
  },
  capitalized: {
    textTransform: "capitalize",
  },
  upppercase: {
    textTransform: "uppercase",
  },
  underlined: {
    textDecorationLine: "underline",
  },
  white: {
    color: Colors.white,
  },
  red: {
    color: Colors.red,
  },
  black: {
    color: Colors.black,
  },
  gray: {
    color: Colors.lightBlack,
  },
  success: {
    color: Colors.green,
  },
  mainColor: {
    color: Colors.primary,
  },
  lightBlack: {
    color: "rgba(43, 48, 49, 1)",
  },
});
