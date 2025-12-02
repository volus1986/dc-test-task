import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ordersState {
    id: number;
    serialNumber: number;
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
}

const initialState: ordersState[] = [
    {
        id: 1,
        serialNumber: 1234,
        isNew: 1,
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33',
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 },
        ],
        order: 1,
        date: '2017-06-29 12:09:33',
    },
    {
        id: 2,
        serialNumber: 1234,
        isNew: 1,
        photo: 'pathToFile.jpg',
        title: 'Product 1',
        type: 'Monitors',
        specification: 'Specification 1',
        guarantee: {
            start: '2017-06-29 12:09:33',
            end: '2017-06-29 12:09:33',
        },
        price: [
            { value: 100, symbol: 'USD', isDefault: 0 },
            { value: 2600, symbol: 'UAH', isDefault: 1 },
        ],
        order: 2,
        date: '2017-06-29 12:09:33',
    },
];

const orders = createSlice({
    name: 'products',
    initialState,
    reducers: {
        remove(state, action: PayloadAction<number>) {
            state.filter((order) => order.id !== action.payload);
        },
    },
});

export const { remove } = orders.actions;
export default orders.reducer;
