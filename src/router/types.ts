import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { type ParamListBase } from "@react-navigation/native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";


export interface TabStackParamList extends ParamListBase {}
export type TabScreenProps<ScreenName extends keyof TabStackParamList> =
  BottomTabScreenProps<TabStackParamList, ScreenName>;

export interface RootStackParamsList extends ParamListBase {
 Home: undefined
}

export type RootStackProps<ScreenName extends keyof RootStackParamsList> =
  NativeStackScreenProps<RootStackParamsList, ScreenName>;
