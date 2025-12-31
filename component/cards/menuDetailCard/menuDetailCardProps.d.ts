interface MenuDetailCardProps {
  item: any;
  index: number;
  selectedSizes: Record<number, SelectedSize>;
  openPopupId: number | null;
  togglePopup: (id: number) => void;
  setSelectedSizes: React.Dispatch<
    React.SetStateAction<Record<number, SelectedSize>>
  >;
  setOpenPopupId: (id: number | null) => void;
  getWishListData: any[];
  addToWish: (data: any) => void;
  storeCartData: (data: any) => void;
}

interface SelectedSize {
  size: string;
  price: string;
}
