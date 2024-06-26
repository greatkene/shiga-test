import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamsList } from "./types";
import { BottomTab } from "./BottomTab";
import { ConfirmDetails, Confirmation, TopUp } from "@screens/app";

const Stack = createNativeStackNavigator<RootStackParamsList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Tab" component={BottomTab} />
      <Stack.Screen name="TopUp" component={TopUp} />
      <Stack.Screen name="ConfirmDetails" component={ConfirmDetails} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
};

export default AppStack;
