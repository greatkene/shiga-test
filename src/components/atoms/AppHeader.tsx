import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { AppText } from "./AppText";
import { Colors, Sizes, normalize } from "@theme";
import { getInitials } from "@utils/helper";
import { useUser } from "@store";

interface AppHeaderProps {
  onPress?: () => void;
  title?: string;
  icon?: React.ReactNode;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  onPress,
  title,
  icon,
}) => {
  const { userProfile } = useUser();

  const fullname = `${userProfile?.first_name || ""} ${
    userProfile?.last_name || ""
  }`.trim();

  const initials = fullname ? getInitials(fullname) : "?";

  return (
    <View style={styles.container}>
      <View style={styles.initialsContainer}>
        <View style={styles.initial}>
          <AppText black semiMedium fontMedium>
            {initials}
          </AppText>
        </View>

        <AppText white semiBig fontBold>
          {title}
        </AppText>
      </View>
      {icon && (
        <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: Sizes.font12,
  },
  initialsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: Sizes.font10,
  },
  initial: {
    width: normalize(30),
    height: normalize(30),
    borderRadius: Sizes.font30,
    backgroundColor: Colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContainer: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: "center",
    alignItems: "center",
  },
});
