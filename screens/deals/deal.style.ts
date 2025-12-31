import { color, font } from '@theme';
import { StyleSheet } from 'react-native';

export const dealStyles = StyleSheet.create({
  touchableContainer: {
    backgroundColor: color.white,
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 1,
    borderColor: color.borderColor,
  },
  dealImage: {
    height: 150,
    width: '100%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  cardBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'space-between',
  },
  title: { fontSize: 16, fontFamily: font.urbanistBold },
  moneyIcon: { height: 20, width: 20 },
  subTitle: {
    fontFamily: font.urbanistSemiBold,
    marginLeft: 10,
  },
  frameIconContainer: {
    backgroundColor: color.white,
    borderWidth: 1,
    padding: 5,
    borderRadius: 40,
    borderColor: color.border,
  },
  frameIcon: { height: 15, width: 15 },
  paddingTen: { padding: 10 },
  radius: { borderRadius: 5 },
  appIntroContainer: { flexDirection: 'row', alignSelf: 'center' },
  marginTop: { marginTop: 15 },
  paginationContainer: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    backgroundColor: color.dotBackGround,
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  offerDataStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  marginBottom: { marginBottom: 50, marginTop: -20 },
  directionRow: { flexDirection: 'row' },
  appIntroView: { height: '11%', marginTop: 20 },
  mainView: { flex: 1, backgroundColor: color.white },
  flexGrow: {
    flexGrow: 1,
  },
});
