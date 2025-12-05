import { configureStore } from '@reduxjs/toolkit';
import ordersReducer from './slices/orders';
import productsReducer from './slices/products';

export const store = configureStore({
    reducer: {
        orders: ordersReducer,
        products: productsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
