export interface MealItem {
  id: number;
  name: string;
  selected?: boolean;
}

export interface Deal {
  id: number;
  name: string;
  title: string;
  subText: string;
  backImage: any;
  data: MealItem[];
  selectItem?: number;
  isSelected?: boolean;
}
interface RouteParams {
  id: number;
  name: string;
}
