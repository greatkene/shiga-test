import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "./types";
import { Colors, Sizes, verticalScale } from "@theme";
import { Account, Cards, Home, Search, Transactions } from "@screens/app";
import { Image } from "react-native";

const Tab = createBottomTabNavigator<TabStackParamList>();

export const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }: any) => ({
        tabBarStyle: {
          height: verticalScale(60),
          backgroundColor: "#171819",
          borderTopColor: "#222222",
          paddingTop: Sizes.font20,
        },
        headerShown: false,
        tabBarLabelPosition: "below-icon",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@assets/icons/shiga-active.png")
                  : require("@assets/icons/shiga.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@assets/icons/transactions-active.png")
                  : require("@assets/icons/transactions.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@assets/icons/search.png")
                  : require("@assets/icons/search.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@assets/icons/card-active.png")
                  : require("@assets/icons/card.png")
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require("@assets/icons/account.png")
                  : require("@assets/icons/account.png")
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
