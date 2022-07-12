import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    add:false,
    addClicked:false,
    update:false
}

export const onClickedSlice = createSlice({
    name:'onClick',
    initialState,
    reducers : {
        add : (state)=>{
            state.add=true
            state.addClicked=!state.addClicked
            state.update=false
        },
        update : (state)=>{
            state.update=true
            state.add=false
        }
    }
})

export const selectAdd = (state) => state.onClick.add;

export const selectAddClicked = (state) => state.onClick.addClicked;


export const selectUpdate = (state) => state.onClick.update;

export const {add,update} = onClickedSlice.actions;


export default onClickedSlice.reducer;