import { useCachedResources } from "@hooks";
import Router from "@router/Router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

export default function App() {
  const isLoaded = useCachedResources();

  if (!isLoaded) {
    return <View></View>;
  } else {
    return (
      <>
        <Router />
        <StatusBar style="light" />
      </>
    );
  }
}
