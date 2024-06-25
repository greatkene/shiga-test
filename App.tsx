import { useCachedResources } from "@hooks";
import Router from "@router/Router";
import { View } from "react-native";

export default function App() {
  const isLoaded = useCachedResources();

  if (!isLoaded) {
    return <View></View>;
  } else {
    return <Router />;
  }
}
