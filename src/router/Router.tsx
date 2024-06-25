import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator } from "react-native";
import AppStack from "./AppStack";

const Router = () => {
  const [loading, setLoading] = useState(false);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default Router;
