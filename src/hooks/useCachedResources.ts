import { useEffect, useState } from "react";
import * as Font from "expo-font";

export const useCachedResources = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          "sans-regular": require("@assets/font/ShigaSans-Regular.otf"),
          "sans-medium": require("@assets/font/ShigaSans-Medium.otf"),
          "sans-bold": require("@assets/font/ShigaSans-Bold.otf"),
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
