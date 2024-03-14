// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//     wishlistproducts: ['dsfd'],
   
// }

// export const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//         const { id } = action.payload;
//         const exists = state.items.find(item => item.id === id);
//         if (!exists) {
//           state.items.push(action.payload);
//         }
//       },
//     removefromwishlist : (state,action)=>{
//       state.products = state.products.filter(item=>item.id !== action.payload.id)
//     },
//     resetwishlsit : (state)=>{
//        state.products=[]
//     }
  
//   },
// })

// export const { addToWishlist,removefromwishlist ,resetwishlsit } = wishlistSlice.actions

// export default wishlistSlice.reducer



import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productsWish: [],
}

export const wishSlice = createSlice({
  name: 'wish',
  initialState,
  reducers: {
    addtowish: (state,action) => {
        const product = state.productsWish.find(item=>item.id === action.payload.id)
        !product && state.productsWish.push(action.payload)
    },
    removefromwish : (state,action)=>{
      state.productsWish = state.productsWish.filter(item=>item.id !== action.payload.id)
    },
    resetwish : (state)=>{
       state.productsWish=[]
    }
  
  },
})




export const { addtowish,removefromwish,resetwish } = wishSlice.actions
export default wishSlice.reducer