import { NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabParams } from '../bottomTabNav/bottomTabNavParams';

export type RootStackParams = {
  menuDetail: { data: any };
  createDeals: undefined;
  myOrder: undefined;
  mealDeal: { id: number; name: string };
  myPaymentCard: undefined;
  rewardPoint: undefined;
  myWallet: undefined;
  myWishlist: undefined;
  editProfile: undefined;
  cart: undefined;

  bottomTabs: NavigatorScreenParams<BottomTabParams>;
};
