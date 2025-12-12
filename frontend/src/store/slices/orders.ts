import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { BACKEND_URL } from '@/src/lib/config';

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

export const deleteOrder = createAsyncThunk<number, number>(
    'orders/delete',
    async (orderId, { rejectWithValue }) => {
        const response = await fetch(`${BACKEND_URL}/orders/${orderId}`, {
            method: 'DELETE',
        });

        if (!response.ok) {
            return rejectWithValue(`Failed to delete order ID: ${orderId}`);
        }

        return orderId;
    },
);

const orders = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
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
            })
            .addCase(deleteOrder.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(
                deleteOrder.fulfilled,
                (state, action: PayloadAction<number>) => {
                    state.orders = state.orders.filter(
                        (order) => order.id !== action.payload,
                    );
                },
            )
            .addCase(deleteOrder.rejected, (state, action) => {
                state.error = (action.payload as string) || 'Deletion failed';
            });
    },
});

export default orders.reducer;
