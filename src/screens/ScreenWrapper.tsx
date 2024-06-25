import { Colors, Sizes } from "@theme";
import React from "react";
import { NativeModules, Platform, SafeAreaView, View } from "react-native";

const { StatusBarManager } = NativeModules;

interface ScreenProps {
  backgroundColor?: string;
  children: React.ReactNode;
  margin?: boolean;
  imageStatusBar?: boolean;
}

export default function ScreeWrapper({
  margin = true,
  imageStatusBar = false,
  children,
}: ScreenProps) {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
        flex: 1,
        backgroundColor: Colors.bgColor,
      }}
    >
      {imageStatusBar ? (
        children
      ) : (
        <View
          style={{
            flex: 1,

            paddingHorizontal: margin ? Sizes.font12 : undefined,
          }}
        >
          {children}
        </View>
      )}
    </SafeAreaView>
  );
}