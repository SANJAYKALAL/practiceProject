export interface SelectedSize {
  size: string;
  price: string;
}

export interface PizzaItem {
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

export interface CartItem {
  id: number;
  cartID?: number;
  pizzaName: string;
  price: number;
  quantity: number;
  image?: number | string;
  selectedSize: string[];
}

export interface MealItem {
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

export interface CreateDealItem {
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

export type MenuDetailParams = {
  MenuDetail: { data: PizzaItem };
};

export interface PizzaDataState {
  data: PizzaItem[];
}
