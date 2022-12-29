import basketReducer from './features/basketSlice';
import restaurantReducer from './features/restaurantSlice';
import { configureStore } from '@reduxjs/toolkit';
 export const store = configureStore({
    reducer: {
      basket:basketReducer,
      restaurant:restaurantReducer,
    }
  })