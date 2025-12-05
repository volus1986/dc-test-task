'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { useState } from 'react';
import Product from './components/Product';

export default function Home() {
    const orderItems = useSelector((state: RootState) => state.orders);
    const [openedOrderId, setOpenedOrderId] = useState<number | null>(null);

    const handleShowOrderDetails = (orderId: number) => {
        setOpenedOrderId(orderId);
    };

    const handleCloseOrderDetails = () => {
        setOpenedOrderId(null);
    };

    const productElements = orderItems.map((order) => {
        return (
            <Product
                key={order.id}
                id={order.id}
                title={order.title}
                dateTimeString={order.date}
                productIds={[1, 2]}
                amountUsd={1000}
                amountUah={100000}
                hideOrderName={!openedOrderId}
            />
        );
    });

    return (
        <div className="mx-32 mt-16 bg-white w-full">
            <span>Продукты / {orderItems.length}</span>
            <div className="flex mt-14">
                <div className="grid gap-2 mr-4 w-full flex-1">
                    {productElements}
                </div>
            </div>
        </div>
    );
}
