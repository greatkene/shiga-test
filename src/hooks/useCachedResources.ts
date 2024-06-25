import { useEffect, useState } from "react";
import * as Font from "expo-font";
import {
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans";

export const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "sans-light": OpenSans_300Light,
          "sans-regular": OpenSans_400Regular,
          "sans-medium": OpenSans_500Medium,
          "sans-semi-bold": OpenSans_600SemiBold,
          "sans-bold": OpenSans_700Bold,
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsLoadingComplete(true);
      }
    }
    loadResourcesAndDataAsync();
  }, []);
  return isLoadingComplete;
};
