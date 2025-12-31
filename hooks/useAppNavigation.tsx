import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigation/stack/rootStackParams';
import { BottomTabParams } from '../navigation/bottomTabNav/bottomTabNavParams';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';

export const useAuthNavigation = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): NativeStackNavigationProp<RootStackParams, T> => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams, T>>();
  return navigation;
};

export const useBottomTabNavigation = <
  T extends keyof BottomTabParams = keyof BottomTabParams,
>(
  values?: T,
): BottomTabNavigationProp<BottomTabParams, T> => {
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabParams, T>>();
  return navigation;
};

export const useAuthRoute = <
  T extends keyof RootStackParams = keyof RootStackParams,
>(
  values?: T,
): RouteProp<RootStackParams, T> => {
  const route = useRoute<RouteProp<RootStackParams, T>>();
  return route;
};
