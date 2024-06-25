import React from "react";
import {
  createNativeStackNavigator,
  type NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamsList } from "./types";
import { Home } from "@screens/app";

const Stack = createNativeStackNavigator<RootStackParamsList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

const AppStack = () => {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
