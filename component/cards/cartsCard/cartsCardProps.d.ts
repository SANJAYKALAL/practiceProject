interface CartsCardProps {
  item: CartsObj;
  updateQuantity: (
    id: string,
    size: string,
    type: 'increase' | 'decrease',
  ) => void;
  index: number;
}

interface CartsObj {
  id: number;
  pizzaName: string;
  price: string;
  image: any;
  selectedSize?: string;
  quantity: number;
}
