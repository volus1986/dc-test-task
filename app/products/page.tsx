'use client';

import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import Product from './components/Product';

export default function Home() {
    const orderItems = useSelector((state: RootState) => state.orders);
    const productItems = useSelector((state: RootState) => state.products);

    const productElements = productItems.map((product) => {
        const order = orderItems.find(
            (order) => order.id === product.order,
        ) ?? { title: '', date: '' };

        return (
            <Product
                key={product.id}
                id={product.id}
                title={product.title}
                status={''}
                imageUrl={product.photo}
                serialNumber={product.serialNumber}
                guaranteeStart={product.guarantee.start}
                guaranteeEnd={product.guarantee.end}
                isNew={!!product.isNew}
                prices={product.price}
                orderName={order.title}
                orderDateTimeString={order.date}
            />
        );
    });

    return (
        <div className="px-32 pt-16 w-full h-fit">
            <span className="font-extrabold">
                Продукты / {productItems.length}
            </span>
            <div className="flex mt-14">
                <div className="grid gap-2 mr-4 w-full auto-cols-max">
                    {productElements}
                </div>
            </div>
        </div>
    );
}
