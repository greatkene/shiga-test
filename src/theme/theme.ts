import { Dimensions, PixelRatio, Platform, Appearance } from "react-native";

export const colorScheme = Appearance.getColorScheme();

export const screenHeight = Dimensions.get("window").height;
export const screenWidth = Dimensions.get("window").width;

// based on iphone 5s's scale
const scale = screenWidth / 320;

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scaleSize = (size: number) =>
  (screenWidth / guidelineBaseWidth) * size;

export const verticalScale = (size: number) =>
  (screenHeight / guidelineBaseHeight) * size;

export const moderateScale = (size: number, factor = 0.5) =>
  size + (scaleSize(size) - size) * factor;

export function normalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export const RPH = (percentage: number) => {
  return (percentage / 100) * screenHeight;
};

export const RPW = (percentage: number) => {
  return (percentage / 100) * screenWidth;
};

export const FontFamily = {
  sansRegular: "sans-regular",
  sansMedium: "sans-medium",
  sansSemiBold: "sans-semi-bold",
  sansBold: "sans-bold",
};

export const Colors = {
  primary: "#727AE4",
  bgColor: "#0F0F10",
  white: "#FFFFFF",
  success: "#34C759",
  border: "rgba(0, 0, 0, 0.2)",
  red: "#DC2626",
  black: "#000000",
  green: "rgba(37, 156, 26, 1)",
  lightBlack: "rgba(0, 0, 0, 0.6)",
  secondary: "#FFC8DD",
};

export const Sizes = {
  font2: moderateScale(2),
  font4: moderateScale(4),
  font6: moderateScale(6),
  font8: moderateScale(8),
  font10: moderateScale(10),
  font11: moderateScale(11, 0.5),
  font12: moderateScale(12, 0.5),
  font14: moderateScale(14, 0.5),
  font16: moderateScale(16, 0.7),
  font18: moderateScale(18),
  font20: moderateScale(20, 0.4),
  font22: moderateScale(24, 0.4),
  font26: moderateScale(26, 0.5),
  font30: moderateScale(30, 0.4),
  font34: moderateScale(34, 0.4),
  font45: moderateScale(45, 0.5),
  font50: moderateScale(50, 0.5),
  font57: moderateScale(57, 0.5),
};
