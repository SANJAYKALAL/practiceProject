interface CompleteYourMealCardProps {
  item: CompleteYourMealCardObj;
  onPress: (item: CompleteYourMealCardObj) => void;
}

interface CompleteYourMealCardObj {
  id: number;
  name: string;
  price: string;
  image: any;
}
