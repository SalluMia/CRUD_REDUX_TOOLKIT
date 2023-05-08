import { createSlice } from "@reduxjs/toolkit";

const initialStateCounter={
    number:0
}

export const counterSlice=createSlice({
     name:'counter',
     initialState: initialStateCounter,
     reducers:{
           incre:(state)=>{
              state.number += 1
           },

           decre:(state)=>{
             state.number -= 1
           }
     }
})

export  const {incre,decre}=counterSlice.actions
export default counterSlice.reducer