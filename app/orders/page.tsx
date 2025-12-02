'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function Home() {
    const orderItems = useSelector((state: RootState) => state.orders);

    return <div>Orders</div>;
}
