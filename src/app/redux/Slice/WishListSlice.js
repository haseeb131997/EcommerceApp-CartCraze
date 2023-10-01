const { createSlice } = require('@reduxjs/toolkit')

const WishListSlice = createSlice({
    name:'wishList',
    initialState:{
        data:[],
    },
    reducers:{
        addItemToWishList(state, action){
            let tempData = state.data;
            tempData.push(action.payload);
            state.data = tempData;
        }
    }
})

export const { addItemToWishList} = WishListSlice.actions;
export default WishListSlice.reducer;