import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamsList } from "./types";
import { BottomTab } from "./BottomTab";

const Stack = createNativeStackNavigator<RootStackParamsList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Tab" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default AppStack;
