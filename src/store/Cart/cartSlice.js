import { createSlice, current } from "@reduxjs/toolkit";

const storeSlice = createSlice({
    name : "cart",
    initialState : {
        items : []
    },
    // addItems, removeItems, clearCart are all actions which will be executed when dispatched
    reducers : {
        addItems : (state, action)=>{
            const existingIndex = state.items.findIndex(item => item?.card?.info?.id == action.payload?.card?.info?.id);

            // If the item already exists in the current state, increase it's quantity. Otherwise, push the new item and mark it's quantity as 1
            if(existingIndex != -1){
                const currentItem = state.items[existingIndex];
                state.items[existingIndex] = { ...currentItem, quantity: currentItem.quantity + 1 };
            }else{
                state.items.push({...action.payload, quantity: 1});
            }
        },

        removeItems : (state, action)=>{
            // We will take only the id of the item as action.payload and search using the id, no need to take the entire item
            const existingIndex = state.items.findIndex(item => item?.card?.info?.id == action.payload);
            const currentItem = state.items[existingIndex];
            
            //Reduce the current item's quantity by 1.
            state.items[existingIndex] = {...currentItem, quantity : currentItem.quantity - 1};

            // If the quantity is 0, then remove the item from the items array
            if (state.items[existingIndex].quantity == 0){
                state.items.splice(existingIndex, 1);
            }
        },

        clearCart : (state)=>{
            state.items = [];
        }

    }
})

export const {addItems, removeItems, clearCart} = storeSlice.actions;
export default storeSlice.reducer;