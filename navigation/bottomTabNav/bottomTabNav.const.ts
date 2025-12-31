import { BottomTabParams } from './bottomTabNavParams';
import Deals from '../../screens/deals/Deals';
import Home from '../../screens/home/Home';
import Menu from '../../screens/menu/Menu';
import Profile from '../../screens/profile/Profile';

export const bottomTabs: {
  id: number;
  name: keyof BottomTabParams;
  component: React.ComponentType<any>;
}[] = [
  { id: 1, name: 'home', component: Home },
  { id: 2, name: 'menu', component: Menu },
  { id: 3, name: 'deals', component: Deals },
  { id: 4, name: 'profile', component: Profile },
];
