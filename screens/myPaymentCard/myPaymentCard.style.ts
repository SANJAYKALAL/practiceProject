import { color, font } from '@theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  leftArrow: { height: 25, width: 25, resizeMode: 'contain' },
  listContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 15,
    borderColor: color.border,
    backgroundColor: color.white,
    padding: 20,
    borderRadius: 5,
  },
  headerSubContainer: { flexDirection: 'row', alignItems: 'center' },
  Image: { height: 46, width: 46, resizeMode: 'contain' },
  text: { fontFamily: font.urbanistBold, fontSize: 16 },
  subText: { fontFamily: font.urbanistRegular, fontSize: 14 },
  deleteIcon: { height: 24, width: 24, resizeMode: 'contain' },
  listStyle: { marginHorizontal: 10, marginTop: 20 },
  textContainer: { marginLeft: 15 },
  mainContainer: { flex: 1, backgroundColor: color.backGroundColor },
  directionRow: {
    flexDirection: 'row',
  },
});
