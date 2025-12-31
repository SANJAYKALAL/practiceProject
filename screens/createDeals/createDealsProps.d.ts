export interface CreateDealItem {
  id: number;
  cartID?: number;
  backImage?: any;
  price: number;
  data: CreateDealItemOption[];
  isSelected?: boolean;
  selectItem?: number;
}

export interface DealsObj {
  id?: number;
  text: string;
  subText: string;
  createDealsData: CreateDealItem[];
}

export interface CartItem {
  id: number;
  cartID?: number;
  pizzaName: string;
  price: number;
  quantity: number;
  image?: any;
  selectedSize: string[];
}

export interface CreateDealsObj {
  id: number;
  image: number;
  title: string;
  text: string;
  subText: string;
  price: string;
  cartID: number;
  backImage: number;
  selectItem: number;
  item: number;
  isSelected: boolean;
  data: Data[];
}

export interface Data {
  id: number;
  image: number;
  text: string;
  subText: string;
  selected: boolean;
}
