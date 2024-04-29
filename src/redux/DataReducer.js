import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const DataSlice =createSlice({
  name:"AllData",
  initialState:[],
  reducers:{
    savedata(state,action)
    {
      return action.payload;
    }
  }
})

export const {savedata}=DataSlice.actions
export default DataSlice.reducer
