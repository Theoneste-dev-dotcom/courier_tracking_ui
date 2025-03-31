import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'
import { shipmentApi } from '@/features/shippings/shipments_slice'
import { authApi } from '@/features/user/authSlice'

const combinedReducer = {
  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  lead : leadsSlice,
  [shipmentApi.reducerPath]: shipmentApi.reducer,
  [authApi.reducerPath] : authApi.reducer,
}

export const makeStore = () => {
  return configureStore({
    reducer : combinedReducer,
    middleware: (getDefaultMiddleare) => {
      return getDefaultMiddleare()
      .concat(shipmentApi.middleware)
      .concat(authApi.middleware)
    },
    
  })
}

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
