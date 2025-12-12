'use client';

import Product from './components/Product';
import { SetStateAction, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/src/store/hooks';
import { fetchAllProducts } from '@/src/store/slices/products';

const filterTypes = {
    none: '',
    monitors: 'Monitors',
    laptops: 'Laptops',
};

export default function Products() {
    const dispatch = useAppDispatch();
    const orderItems = useAppSelector((state) => state.orders.orders);
    const productItems = useAppSelector((state) => state.products.products);
    const [typeFilter, setTypeFilter] = useState(filterTypes.none);
    const [isRendered, setIsRendered] = useState<boolean>(false);

    useEffect(() => {
        setIsRendered(true);
    }, []);

    useEffect(() => {
        dispatch(fetchAllProducts());
    }, [dispatch]);

    useEffect(() => {}, []);

    const handleChangeTypeFilter = (e: {
        target: { value: SetStateAction<string> };
    }) => {
        setTypeFilter(e.target.value);
    };

    const productElements = productItems
        .filter((product) =>
            typeFilter === filterTypes.none
                ? true
                : product.type === typeFilter,
        )
        .map((product) => {
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
        <div
            className={`
            px-32 pt-16 w-full h-fit
            transition-opacity duration-500 ease-in-out ${isRendered ? 'opacity-100' : 'opacity-0'}
        `}
        >
            <div className="flex">
                <div className="font-extrabold flex items-center">
                    Products / {productItems.length}
                </div>
                <div className="flex ml-7 items-center">
                    <span className="text-[#90a4ae]">Type</span>
                    <select
                        className="ml-2.5 w-[330px] bg-white border border-[#d1d9dd] rounded-sm px-3 py-2 align-middle"
                        onChange={handleChangeTypeFilter}
                        value={typeFilter}
                    >
                        <option value={filterTypes.none}>*</option>
                        <option value={filterTypes.monitors}>Monitor</option>
                        <option value={filterTypes.laptops}>Laptops</option>
                    </select>
                </div>
            </div>
            <div className="flex mt-14">
                <div className="grid gap-2 mr-4 w-full auto-cols-max">
                    {productElements}
                </div>
            </div>
        </div>
    );
}
