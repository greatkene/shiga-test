import { Colors, Sizes } from "@theme";
import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  ActivityIndicator,
  ViewStyle,
} from "react-native";
import { AppText } from "./AppText";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
  loading?: boolean;
  transparent?: boolean;
}

export const AppButton: React.FC<ButtonProps> = ({
  title,
  onPress,
  style,
  disabled,
  loading,
  transparent = false,
}) => {
  const buttonColor = disabled
    ? "rgba(114,122,228, .1)"
    : transparent
    ? "#2E302E"
    : Colors.primary;
  const textColor = disabled
    ? Colors.lightBlack
    : transparent
    ? Colors.white
    : Colors.white;

  const borderColor = disabled
    ? "rgba(0, 0, 0, .15)"
    : transparent
    ? "#2E302E"
    : Colors.primary;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.button,
        style,
        {
          backgroundColor: buttonColor,
          borderColor: borderColor,
          borderWidth: transparent ? 1 : 0,
        },
      ]}
    >
      <View style={styles.buttonContent}>
        {loading ? (
          <ActivityIndicator color={Colors.white} size="small" />
        ) : (
          <>
            <AppText
              white
              semiMedium
              centered
              style={{ marginRight: Sizes.font6, color: textColor }}
            >
              {title}
            </AppText>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: Sizes.font16,
    paddingVertical: Sizes.font12,
    borderRadius: Sizes.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: Sizes.font6,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
