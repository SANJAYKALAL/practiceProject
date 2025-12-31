export interface UserReducerProps {
  pizzaData: PizzaObj;
  cartData: CartObj[];
  mealsData: MealObj[];
  getCreateData: Record<string, any>;
  userData: User | null;
  getWishList: PizzaObj[];
  getToDealData: any[];
  dealsData: DealsObj;
  deals: CreateDealObj[];
}

interface User {
  name: string;
  email: string;
  mobile: string;
}

export interface CartObj {
  id: number;
  cartID?: number;
  pizzaName: string;
  price: number;
  quantity: number;
  image?: number | string;
  selectedSize: string[];
}

export interface SelectedSize {
  size: string;
  price: string;
}

export interface PizzaObj {
  id: number;
  category: string;
  pizzaName: string;
  price: string;
  image?: number | string;
  size?: SelectedSize[];
  selectedSize?: string;
  detail?: string;
  new?: boolean;
  data: DataObj[];
}

export interface DataObj {
  id: number;
  image: number;
  pizzaName: string;
  category: string;
  new: boolean;
  detail: string;
  size: SizeObj[];
}

export interface SizeObj {
  id: number;
  size: string;
  price: string;
}

export interface MealObj {
  id: number;
  name: string;
  selected?: boolean;
}

export interface CreateDealItemOption {
  id: number;
  text: string;
  selected: boolean;
  subText?: string;
  image?: number;
}

export interface CreateDealObj {
  id: number;
  cartID?: number;
  backImage?: any;
  price: number;
  data: CreateDealItemOption[];
  isSelected?: boolean;
  selectItem?: number;
  title?: string;
  text?: string;
  subText?: string;
}

export interface DealsObj {
  id?: number;
  text: string;
  subText: string;
  createDealsData: CreateDealItem[];
}
// interface User {
//   name?: string;
//   email?: string;
//   mobile?: string | number;
//   photo?: string;
// }

interface CreateMealData {
  id: number;
  title: string;
  subText: string;
  backImage: number | string;
  data: any[];
}

interface StoreDataState {
  pizzaData: any[];
  cartData: any[];
  mealsData: any[];
  getCreateData: Record<string, any>;
  userData: User | null;
  getWishList: any[];
  getToDealData: any[];
  dealsData: any[];
  deals: any[];
}
