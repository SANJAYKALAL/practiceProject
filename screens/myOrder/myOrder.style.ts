import { color, font } from '@theme';
import { StyleSheet } from 'react-native';

export const orderStyle = StyleSheet.create({
  headerSubContainer: { flexDirection: 'row', alignItems: 'center' },
  arrowIcon: { height: 25, width: 25, resizeMode: 'contain' },
  ListContainer: {
    padding: 17,
    borderWidth: 1,
    marginTop: 20,
    borderColor: color.border,
    backgroundColor: color.white,
    borderRadius: 5,
  },
  upperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  orderId: {
    fontFamily: font.urbanistSemiBold,
    fontSize: 15,
    color: color.black,
  },
  address: {
    fontFamily: font.urbanistMedium,
    fontSize: 13,
    color: color.subText,
    marginTop: 5,
  },
  status: {
    fontFamily: font.urbanistSemiBold,
    fontSize: 14,
    color: color.white,
  },

  separator: { height: 1, backgroundColor: color.backGround, marginTop: 10 },
  orderMenuContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    padding: 1,
  },
  menuIcon: {
    height: 32,
    width: 32,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: color.border,
  },
  menuText: {
    fontFamily: font.urbanistMedium,
    fontSize: 14,
    marginLeft: 10,
    color: color.subText,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  date: { fontFamily: font.urbanistMedium, fontSize: 13, color: color.subText },
  reorderIcon: {
    height: 16,
    width: 16,
    alignSelf: 'center',
    resizeMode: 'contain',
    right: 5,
  },
  reorderText: {
    fontFamily: font.urbanistBold,
    fontSize: 14,
    color: color.slateGray,
  },
  orderStatusBack: {
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
  },
  marginHori: { marginHorizontal: 20, marginBottom: 100 },
  directionRow: { flexDirection: 'row' },
  listEmptyView: { alignItems: 'center', marginTop: '50%' },
  validationImage: { height: 160, width: 215, resizeMode: 'contain' },
  text: {
    fontSize: 18,
    fontFamily: font.urbanistBold,
    color: color.orderText,
  },
  subText: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: font.urbanistMedium,
    color: color.orderSubText,
    marginTop: 5,
  },
  flex: { flexGrow: 1 },
});
