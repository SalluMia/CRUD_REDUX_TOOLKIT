import { createSlice } from "@reduxjs/toolkit";


const localStorageKey = "formData";

const getStoredData = () => {
  const storedData = localStorage.getItem(localStorageKey);
  return storedData ? JSON.parse(storedData) : [];
};

const storeData = (data) => {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
};

const initialState = {
       value: getStoredData()
     };

const formSlice=createSlice({
          
       name:'form',
       initialState:initialState,

       reducers:{
           addData:(state,action)=>{
            state.value.push(action.payload)
             storeData(state.value);
           },
           delData:(state,action)=>{
              state.value = state.value.filter((item, index) => index !== action.payload);
           },
           updateData: (state, action) => {
              const { index, formData } = action.payload;
              state.value = state.value.map((item, i) => {
                if (i === index) {
                  return formData;
                }
                return item;
              });
            }

       }
})

export const{addData,delData,updateData}=formSlice.actions
export default formSlice.reducer