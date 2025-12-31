import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './customBottomTabNav.style';
import SvgIconIndex from '@svgIndex';
import { color } from '@theme';

const CustomBottomTab: React.FC<BottomTabBarProps> = ({
  state,
  navigation,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingBottom: insets.bottom }}>
      <View style={styles.bottomTabContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('home')}
          style={styles.tabItem}
        >
          {state.index === 0 ? (
            <SvgIconIndex.homeFillIcon />
          ) : (
            <SvgIconIndex.homeIcon />
          )}
          <Text
            style={[
              styles.tabText,
              { color: state.index === 0 ? color.primary : color.gray },
            ]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('menu')}
          style={styles.tabItem}
        >
          {state.index === 1 ? (
            <SvgIconIndex.menuFillIcon />
          ) : (
            <SvgIconIndex.menuIcon />
          )}
          <Text
            style={[
              styles.tabText,
              { color: state.index === 1 ? color.primary : color.gray },
            ]}
          >
            Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('deals')}
          style={styles.tabItem}
        >
          {state.index === 2 ? (
            <SvgIconIndex.dealFillIcon />
          ) : (
            <SvgIconIndex.dealIcon />
          )}
          <Text
            style={[
              styles.tabText,
              { color: state.index === 2 ? color.primary : color.gray },
            ]}
          >
            Deals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('profile')}
          style={styles.tabItem}
        >
          {state.index === 3 ? (
            <SvgIconIndex.profileFillIcon />
          ) : (
            <SvgIconIndex.profileIcon />
          )}
          <Text
            style={[
              styles.tabText,
              { color: state.index === 3 ? color.primary : color.gray },
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomBottomTab;
