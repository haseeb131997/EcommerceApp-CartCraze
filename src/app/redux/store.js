const { configureStore }= require('@reduxjs/toolkit')
import ProductReducer from './Slice/ProductsSlice';
import  WishListReducer from './Slice/WishListSlice';
import  CartReducer from './Slice/CartSlice';
export const store = configureStore({
    reducer:{
        product: ProductReducer,
        wishlist: WishListReducer,
        cart: CartReducer,
    }
})