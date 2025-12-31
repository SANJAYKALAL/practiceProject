import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StoreDataState, UserReducerProps } from './storeDataProps';

const initialState: StoreDataState = {
  pizzaData: [],
  cartData: [],
  mealsData: [],
  getCreateData: {},
  userData: null,
  getWishList: [],
  getToDealData: [],
  dealsData: [],
  deals: [],
};

const storeDataSlice = createSlice({
  name: 'storeDataReducer',
  initialState,
  reducers: {
    storePizzaData: (state, action: PayloadAction<any[]>) => {
      state.pizzaData = action.payload;
    },
    storeCartData: (state, action: PayloadAction<any[]>) => {
      state.cartData = action.payload;
    },
    storeCreateData: (state, action: PayloadAction<any | any[]>) => {
      if (Array.isArray(action.payload)) {
        state.deals = action.payload;
      } else {
        const existingIndex = state.deals.findIndex(
          d => d.id === action.payload.id,
        );
        if (existingIndex >= 0) {
          state.deals[existingIndex] = action.payload;
        } else {
          state.deals.push(action.payload);
        }
      }
    },
    storeUserData: (state, action: PayloadAction<User>) => {
      state.userData = action.payload;
    },

    addToWishList: (state, action: PayloadAction<any[]>) => {
      state.getWishList = action.payload;
    },
    storeDealsData: (state, action: PayloadAction<any[]>) => {
      state.dealsData = action.payload;
    },
    updateMealData: (state, action: PayloadAction<any>) => {
      const index = state.deals.findIndex(d => d?.id === action.payload?.id);
      if (index >= 0) {
        state.deals[index] = action.payload;
      }
    },
    resetDeals: state => {
      state.deals = [];
    },
  },
});

export const {
  storePizzaData,
  storeCartData,
  storeCreateData,
  storeUserData,
  addToWishList,
  storeDealsData,
  updateMealData,
  resetDeals,
} = storeDataSlice.actions;

export default storeDataSlice.reducer;
