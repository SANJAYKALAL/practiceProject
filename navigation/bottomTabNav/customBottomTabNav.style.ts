import { color, font } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  bottomTabContainer: {
    height: 71,
    backgroundColor: color.white,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 24,
    width: 24,
  },
  tabIcon: { height: 22, width: 22, resizeMode: 'contain' },
  tabText: {
    fontSize: 13,
    fontFamily: font.urbanistMedium,
    color: color.black,
  },
});

export default styles;
