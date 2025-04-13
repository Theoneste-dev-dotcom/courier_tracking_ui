import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";



const initialState = {
  companyId: null,
  companyName: null,
}

export const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
      setCompanyId: (state, action) => { 
        state.companyId = action.payload.companyId
        state.companyName = action.payload.companyName
       }
  }
})

export const { setCompanyId } = companySlice.actions;
export const selectCompanyId = (state) => state.company?.companyId;
export default companySlice.reducer

// http://localhost:3001/users/email/theo@gmail.com/companies
