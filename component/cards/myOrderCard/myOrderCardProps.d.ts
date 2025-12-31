interface MyOrderCardProps {
  item: Root;
  index: number;
}

interface Root {
  add: string;
  date: string;
  id: number;
  orderId: string;
  orderItem: OrderObj[];
  status: number;
}

interface OrderObj {
  Text: string;
  id: number;
  image: number;
}
