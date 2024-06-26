import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { AppText } from "@atoms";
import { Colors, Sizes, normalize } from "@theme";

interface ServiceOptionCardProps {
  image: ImageSourcePropType;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  onPress?: () => void;
}

export const ServiceOptionCard: React.FC<ServiceOptionCardProps> = ({
  image,
  title,
  subTitle,
  icon,
  onPress,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: Sizes.font18,
        }}
      >
        <View style={styles.imageContainer}>
          <Image source={image} />
        </View>
        <View>
          <AppText fontBold>{title}</AppText>
          <AppText gray>{subTitle}</AppText>
        </View>
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
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    backgroundColor: Colors.primary,
    borderRadius: Sizes.font12,
    padding: Sizes.font10,
  },

  iconContainer: {
    width: normalize(30),
    height: normalize(30),
    justifyContent: "center",
    alignItems: "center",
  },
});
