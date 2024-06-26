import { useCachedResources } from "@hooks";
import Router from "@router/Router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const isLoaded = useCachedResources();

  if (!isLoaded) {
    return <View></View>;
  } else {
    return (
      <GestureHandlerRootView>
        <Router />
        <StatusBar style="light" />
      </GestureHandlerRootView>
    );
  }
}
