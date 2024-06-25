import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "./types";
import { Colors, verticalScale } from "@theme";
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
          backgroundColor: Colors.bgColor,
          borderTopColor: "#222222",
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
          tabBarIcon: () => (
            <Image source={require("@assets/icons/shiga.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={Transactions}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image source={require("@assets/icons/transactions.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image source={require("@assets/icons/search.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Cards"
        component={Cards}
        options={{
          tabBarLabel: "",

          tabBarIcon: () => (
            <Image source={require("@assets/icons/wallet.png")} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image source={require("@assets/icons/account.png")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
