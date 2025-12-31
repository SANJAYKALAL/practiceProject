import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import CustomBottomTab from './CustomBottomTabNav';
import { bottomTabs } from './bottomTabNav.const';
import { BottomTabParams } from './bottomTabNavParams';

const Tab = createBottomTabNavigator<BottomTabParams>();

const BottomTabNav: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props: BottomTabBarProps) => <CustomBottomTab {...props} />}
    >
      {bottomTabs.map(screen => (
        <Tab.Screen
          key={screen.id}
          name={screen.name as keyof BottomTabParams}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNav;
