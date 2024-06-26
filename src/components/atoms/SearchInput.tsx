import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Colors, FontFamily, Sizes } from "@theme";

interface SearchInputProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onChangeText,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <AntDesign name="search1" size={Sizes.font18} color={Colors.subText} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...props}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.placeHolder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.input,
    borderRadius: Sizes.font12,
    paddingHorizontal: Sizes.font16,
    marginTop: Sizes.font30,
    marginBottom: Sizes.font22,
    marginHorizontal: Sizes.font12,
  },
  input: {
    flex: 1,
    color: Colors.white,
    paddingVertical: Sizes.font12,
    marginLeft: Sizes.font10,
    fontSize: Sizes.font14,
    fontFamily: FontFamily.sansRegular,
  },
  searchButton: {
    padding: Sizes.font12,
  },
});
