import { color, font } from '@theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    backgroundColor: color.white,
    padding: 20,
  },
  subContainer: { flexDirection: 'row', marginTop: 10 },
  title: {
    fontSize: 20,
    color: color.darkblue,
    fontFamily: font.urbanistBold,
    paddingHorizontal: 10,
  },
  Image: {
    height: 147,
    width: '100%',
    borderRadius: 3,
    resizeMode: 'contain',
  },
  marginTop: { marginTop: 20 },
  menuCardTouch: { padding: 10 },
  mainContainer: { flex: 1, backgroundColor: color.white },
});
