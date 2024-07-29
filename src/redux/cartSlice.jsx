// import { createSlice } from "@reduxjs/toolkit";

// const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

// const cartSlice =  createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addToCart(state, action){
//             state.push(action.payload)
            
//         },
//         deleteFromCart(state, action){
//             return state.filter(item => item.id != action.payload.id);
//         }
//     }
// })

// export const {addToCart, deleteFromCart} = cartSlice.actions;
// export default cartSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

// Initialize state from localStorage or default to an empty array
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;
            // Check and convert Timestamp to ISO string if necessary
            if (product.time && typeof product.time.toDate === 'function') {
                product.time = product.time.toDate().toISOString();
            }
            state.push(product);
        },
        deleteFromCart(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        }
    }
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export default cartSlice.reducer;
