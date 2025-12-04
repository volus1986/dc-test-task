'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Order from './components/Order';
import addButtonIcon from './icons/add-button.png';
import Image from 'next/image';
import { useState } from 'react';
import OrderDetails from './components/OrderDetails';

export default function Home() {
    const orderItems = useSelector((state: RootState) => state.orders);
    const [openedOrderId, setOpenedOrderId] = useState<number | null>(null);

    const handleShowOrderDetails = (orderId: number) => {
        setOpenedOrderId(orderId);
    };

    const handleCloseOrderDetails = () => {
        setOpenedOrderId(null);
    };

    const orderElements = orderItems.map((order) => {
        return (
            <Order
                key={order.id}
                id={order.id}
                title={order.title}
                dateTimeString={order.date}
                hideOrderName={!openedOrderId}
                showOrderDetailsHandler={handleShowOrderDetails}
            />
        );
    });

    return (
        <div className="mx-32 mt-16 w-full h-fit">
            <div className="flex items-center gap-4">
                <button className="rounded-full cursor-pointer">
                    <Image
                        src={addButtonIcon}
                        alt="Add Order"
                        width="39"
                        height="39"
                    />
                </button>
                <span>Приходы / {orderItems.length}</span>
            </div>
            <div className="flex mt-14">
                <div className="grid gap-2 mr-4 w-full flex-1 h-fit">
                    {orderElements}
                </div>
                {openedOrderId && (
                    <OrderDetails
                        orderId={openedOrderId}
                        onCloseCallback={handleCloseOrderDetails}
                    />
                )}
            </div>
        </div>
    );
}
