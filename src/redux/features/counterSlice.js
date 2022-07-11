import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    count:0
}

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers : {
        count : (state)=>{
            state.count+=1
        },
    }
})

export const selectCount = (state) => state.counter.count;

export const {count} = counterSlice.actions;


export default counterSlice.reducer;