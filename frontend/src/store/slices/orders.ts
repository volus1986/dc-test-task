import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { BACKEND_URL } from '@/lib/config';

type Order = {
    id: number;
    title: string;
    date: string;
    description: string;
};

type OrdersState = {
    orders: Order[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
};

const initialState: OrdersState = {
    orders: [],
    loading: 'idle',
    error: null,
};

export const fetchAllOrders = createAsyncThunk<Order[], void>(
    'orders/fetchAll',
    async () => {
        const response = await fetch(`${BACKEND_URL}/orders`);

        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }

        const data = await response.json();

        return data as Order[];
    },
);

const orders = createSlice({
    name: 'orders',
    initialState,
    reducers: {
        remove(state, action: PayloadAction<number>) {
            state.orders = state.orders.filter(
                (order: Order) => order.id !== action.payload,
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllOrders.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(
                fetchAllOrders.fulfilled,
                (state, action: PayloadAction<Order[]>) => {
                    state.loading = 'succeeded';
                    state.error = null;
                    state.orders = action.payload;
                },
            )
            .addCase(fetchAllOrders.rejected, (state, action) => {
                state.loading = 'failed';
                state.error =
                    action.error.message || 'An unknown error occurred';
                state.orders = [];
            });
    },
});

export default orders.reducer;
export const { remove } = orders.actions;
