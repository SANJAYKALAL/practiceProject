import imageIndex from '@imageIndex';
import { BottomTabParams } from '@navigation/bottomTabNav/bottomTabNavParams';

export const offerData = [
  {
    key: 1,
    offerText: 'GET MIN £125 OFF',
    freeText: '& Free Delivery',
    onYourOrder: 'on your order',
    image: imageIndex.mini,
    pizzaImage: imageIndex.miniPizza,
  },
  {
    key: 2,
    offerText: 'GET MIN £125 OFF',
    freeText: '& Free Delivery',
    onYourOrder: 'on your order',
    image: imageIndex.mini,
    pizzaImage: imageIndex.miniPizza,
  },
  {
    key: 3,
    offerText: 'GET MIN £125 OFF',
    freeText: '& Free Delivery',
    onYourOrder: 'on your order',
    image: imageIndex.mini,
    pizzaImage: imageIndex.miniPizza,
  },
];

type MenuAndDealsItem = {
  key: number;
  text: string;
  subText: string;
  image: any;
  pizzaImage: any;
  screen: keyof BottomTabParams;
};

export const menuAndDealsData: MenuAndDealsItem[] = [
  {
    key: 1,
    text: 'DEALS',
    subText: '37 varieties available',
    image: imageIndex.deals,
    screen: 'deals',
    pizzaImage: imageIndex.miniPizza,
  },
  {
    key: 2,
    text: 'MENU',
    subText: '23 varieties available',
    image: imageIndex.menu,
    screen: 'menu',
    pizzaImage: imageIndex.miniPizza,
  },
  {
    key: 3,
    text: 'GROUP ORDER',
    subText: '37 varieties available',
    image: imageIndex.groupOrder,
    screen: 'deals',
    pizzaImage: imageIndex.miniPizza,
  },
];

export const offerAndBenefit = [
  {
    key: 1,
    text: 'Get £30 off',
    subText: 'Flat £30 off on orders of £200 or more',
    image: imageIndex.offerAndBenefit,
  },
  {
    key: 2,
    text: 'Get £30 off',
    subText: 'Flat £30 off on orders of £200 or more',
    image: imageIndex.offerAndBenefit,
  },
  {
    key: 3,
    text: 'Get £30 off',
    subText: 'Flat £30 off on orders of £200 or more',
    image: imageIndex.offerAndBenefit,
  },
];

export const mindMenu = [
  {
    key: 1,
    title: 'Pizza',
    image: imageIndex.pizza,
  },
  {
    key: 2,
    title: 'Slides',
    image: imageIndex.slides,
  },
  {
    key: 3,
    title: 'Dessert',
    image: imageIndex.dessert,
  },
  {
    key: 4,
    title: 'Drink',
    image: imageIndex.drink,
  },
];
