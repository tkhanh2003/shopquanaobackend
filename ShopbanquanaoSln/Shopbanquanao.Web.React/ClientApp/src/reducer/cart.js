import { createSlice, current  } from '@reduxjs/toolkit'
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addProduct(state, action) {
        state.push(action.payload);
      },
      removeProduct(state, action) {
        return current(state).filter(element => element.product.id_sanpham !== action.payload.id_sanpham);
      },
      clearAll(state, action){
        return [];
      }
    }
  });
  const { actions, reducer } = cartSlice;
  export const { addProduct, removeProduct, clearAll } = actions;
  export default reducer;