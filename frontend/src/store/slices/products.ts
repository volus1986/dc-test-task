import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BACKEND_URL } from '@/lib/config';

type Product = {
    id: number;
    serialNumber: number | string;
    isNew: number;
    photo: string;
    title: string;
    type: string;
    specification: string;
    guarantee: {
        start: string;
        end: string;
    };
    price: {
        value: number;
        symbol: string;
        isDefault: number;
    }[];
    order: number;
    date: string;
};

type ProductsState = {
    products: Product[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
};

export const fetchAllProducts = createAsyncThunk<Product[], void>(
    'products/fetchAll',
    async () => {
        const response = await fetch(`${BACKEND_URL}/products`);

        if (!response.ok) {
            throw new Error('Failed to fetch orders');
        }

        const data = await response.json();

        return data as Product[];
    },
);

const initialState: ProductsState = {
    products: [],
    loading: 'idle',
    error: null,
};

const products = createSlice({
    name: 'products',
    initialState,
    reducers: {
        remove(state: ProductsState, action: PayloadAction<number>) {
            state.products = state.products.filter(
                (product: Product) => product.id !== action.payload,
            );
        },
        removeByOrder(state: ProductsState, action: PayloadAction<number>) {
            state.products = state.products.filter(
                (product: Product) => product.order !== action.payload,
            );
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProducts.pending, (state) => {
                state.loading = 'pending';
                state.error = null;
            })
            .addCase(
                fetchAllProducts.fulfilled,
                (state, action: PayloadAction<Product[]>) => {
                    state.loading = 'succeeded';
                    state.error = null;
                    state.products = action.payload;
                },
            )
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.loading = 'failed';
                state.error =
                    action.error.message || 'An unknown error occurred';
                state.products = [];
            });
    },
});

export const { remove, removeByOrder } = products.actions;

export default products.reducer;
