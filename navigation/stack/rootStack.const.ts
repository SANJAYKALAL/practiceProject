import BottomTabNav from '../bottomTabNav/BottomTabNav';
import { RootStackParams } from './rootStackParams';
import Cart from '../../screens/cart/Cart';
import CreateDeals from '../../screens/createDeals/CreateDeals';
import EditProfile from '../../screens/editProfile/EditProfile';
import MealDeal from '../../screens/mealDeal/MealDeal';
import RewardPoint from '../../screens/rewardPoint/RewardPoint';
import MyWallet from '../../screens/myWallet/MyWallet';
import MenuDetail from '../../screens/menuDetail/MenuDetail';
import MyOrder from '../../screens/myOrder/MyOrder';
import MyPaymentCard from '../../screens/myPaymentCard/MyPaymentCard';
import MyWishlist from '@screens/myWishlist/MyWishList';

export const stackScreens: {
  name: keyof RootStackParams;
  component: React.ComponentType<any>;
}[] = [
  { name: 'bottomTabs', component: BottomTabNav },
  { name: 'menuDetail', component: MenuDetail },
  { name: 'createDeals', component: CreateDeals },
  { name: 'myOrder', component: MyOrder },
  { name: 'mealDeal', component: MealDeal },
  { name: 'myPaymentCard', component: MyPaymentCard },
  { name: 'rewardPoint', component: RewardPoint },
  { name: 'myWallet', component: MyWallet },
  { name: 'myWishlist', component: MyWishlist },
  { name: 'editProfile', component: EditProfile },
  { name: 'cart', component: Cart },
];
