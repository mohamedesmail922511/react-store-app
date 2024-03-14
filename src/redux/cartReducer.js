import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart: (state,action) => {
        const product = state.products.find(item=>item.id === action.payload.id)
        !product && state.products.push(action.payload)
    },
    removefromcart : (state,action)=>{
      state.products = state.products.filter(item=>item.id !== action.payload.id)
    },
    resetcart : (state)=>{
       state.products=[]
    },
    increaseQuantity: (state, action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const product = state.products.find(item => item.id === action.payload);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  
  },
})




export const { addtocart,removefromcart,resetcart ,increaseQuantity,decreaseQuantity} = cartSlice.actions
export default cartSlice.reducer