'use client';

import { RootState } from '@/src/store';
import Order from './components/Order';
import addButtonIcon from './icons/add-button.png';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import OrderDetails from './components/OrderDetails';
import { fetchAllOrders } from '@/src/store/slices/orders';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { fetchAllProducts } from '@/src/store/slices/products';

export default function Home() {
    const dispatch = useAppDispatch();
    const orderItems = useAppSelector(
        (state: RootState) => state.orders.orders,
    );
    const [openedOrderId, setOpenedOrderId] = useState<number | null>(null);
    const [isRendered, setIsRendered] = useState<boolean>(false);

    useEffect(() => {
        setIsRendered(true);
    }, []);

    useEffect(() => {
        dispatch(fetchAllOrders());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

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
                showSimplified={!!openedOrderId}
                isOpened={openedOrderId === order.id}
                showOrderDetailsHandler={handleShowOrderDetails}
            />
        );
    });

    return (
        <div
            className={`
                pl-32 mt-16 w-full h-fit
                transition-opacity duration-500 ease-in-out ${isRendered ? 'opacity-100' : 'opacity-0'}
            `}
        >
            <div className="flex items-center gap-4">
                <button className="rounded-full cursor-pointer">
                    <Image
                        src={addButtonIcon}
                        alt="Add Order"
                        width="39"
                        height="39"
                    />
                </button>
                <span className="font-extrabold">
                    Приходы / {orderItems.length}
                </span>
            </div>
            <div className="flex mt-14">
                <div
                    className={`grid gap-2 mr-4 ${openedOrderId ? 'w-fit' : 'w-full'} h-fit`}
                >
                    {orderElements}
                </div>
                {openedOrderId && (
                    <div className="pr-12">
                        <OrderDetails
                            orderId={openedOrderId}
                            onCloseCallback={handleCloseOrderDetails}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
