'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Order from './components/Order';
import addButtonIcon from './icons/add-button.png';
import Image from 'next/image';

export default function Home() {
    const orderItems = useSelector((state: RootState) => state.orders);

    const orderElements = orderItems.map((order) => {
        return (
            <Order
                key={order.id}
                id={order.id}
                title={order.title}
                dateTimeString={order.date}
                productIds={[1, 2]}
                amountUsd={1000}
                amountUah={100000}
            />
        );
    });

    return (
        <div className="mx-32 mt-16">
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
            <div className="mt-14 grid gap-2">{orderElements}</div>
        </div>
    );
}
