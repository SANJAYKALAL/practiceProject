import { color, font } from '@theme';
import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  leftArrow: { height: 25, width: 25, resizeMode: 'contain' },
  balanceContainer: {
    backgroundColor: color.walletLinearA,
    borderRadius: 5,
    padding: 20,
    marginHorizontal: 15,
    marginTop: 30,
  },
  accountBalance: {
    fontFamily: font.urbanistRegular,
    fontSize: 14,
    color: color.white,
  },
  balanceText: {
    fontFamily: font.urbanistExtraBold,
    fontSize: 22,
    color: color.white,
  },
  separator: { height: 1, backgroundColor: color.backGround, marginTop: 20 },
  walletBalanceText: {
    fontFamily: font.urbanistMedium,
    fontSize: 14,
    color: color.walletText,
    marginTop: 20,
  },
  label: {
    fontFamily: font.urbanistBold,
    fontSize: 16,
    marginTop: 25,
    left: 15,
    color: color.blueGray,
  },
  myEarnText: {
    fontFamily: font.urbanistBold,
    fontSize: 18,
    marginTop: 25,
    left: 15,
    color: color.darkblue,
  },
  redeemTextTagline: {
    fontFamily: font.urbanistMedium,
    fontSize: 14,
    marginTop: 5,
    left: 15,
    color: color.subText,
  },
  inputContainer: { flexDirection: 'row', marginHorizontal: 15, marginTop: 15 },
  textInputContainer: {
    borderWidth: 1,
    borderColor: color.border,
    padding: 10,
    borderRadius: 5,
    width: '70%',
  },
  giftIcon: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    tintColor: color.border,
  },

  touchContainer: {
    backgroundColor: color.primary,
    padding: 15,
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 10,
  },
  inputRedeemText: {
    color: color.white,
    fontFamily: font.urbanistSemiBold,
    paddingHorizontal: 10,
  },
  listContainer: {
    flexDirection: 'row',
    backgroundColor: color.white,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.border,
    margin: 10,
    width: '95%',
  },
  leftContainer: {
    backgroundColor: color.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  offText: {
    color: color.white,
    fontSize: 17,
    transform: [{ rotate: '-90deg' }],
    fontFamily: font.urbanistBold,
  },
  rightContainer: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    color: color.triggerText,
    fontFamily: font.urbanistBold,
  },
  offerText: {
    fontSize: 14,
    color: color.darGray,
    marginTop: 4,
    fontFamily: font.urbanistMedium,
  },
  separatorA: {
    height: 1,
    backgroundColor: color.backGround,
    marginVertical: 8,
  },
  dateText: {
    fontSize: 12,
    color: color.walletText,
    fontFamily: font.urbanistMedium,
  },
  redeemButtonInList: {
    backgroundColor: color.primary,

    borderRadius: 5,
    padding: 10,
    alignSelf: 'flex-end',
  },
  redeemText: {
    color: color.white,
    fontFamily: font.urbanistBold,
    paddingHorizontal: 6,
  },
  inputDirection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  width: { width: '80%', fontFamily: font.urbanistMedium },
  fontWeight: { fontWeight: 'bold' },
  linearGradient: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.border,
    padding: 20,
    marginHorizontal: 10,
    marginTop: 30,
  },
  flex: { flex: 1 },
  flexGrow: { flexGrow: 1 },
});
