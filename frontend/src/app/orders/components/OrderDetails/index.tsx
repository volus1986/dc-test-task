import plusIcon from '@/src/assets/icons/plus-white.svg';
import closeIcon from '@/src/assets/icons/x-gray.svg';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store';
import OrderProduct from '@/src/app/orders/components/OrderDetails/components/OrderProduct';
import { STATUSES } from '@/src/app/components/ProductStatusIcon';

type Props = {
    orderId: number;
    onCloseCallback: () => void;
};

export default function OrderDetails({ orderId, onCloseCallback }: Props) {
    const order = useSelector((state: RootState) =>
        state.orders.orders.find((order) => order.id === orderId),
    );

    const orderProducts = useSelector((state: RootState) =>
        state.products.filter((product) => product.order === orderId),
    );

    const productElements = orderProducts.map((product) => {
        return (
            <OrderProduct
                key={product.id}
                id={product.id}
                status={STATUSES.free}
                imageUrl={product.photo}
                title={product.title}
                serialNumber={product.serialNumber}
            />
        );
    });

    return (
        <div className="border border-[#cfd8dc] border-b-0 rounded-sm relative h-fit bg-white w-fit min-w-[700px]">
            <button
                className="absolute -right-6 -top-6 bg-white cursor-pointer w-11 h-11 flex items-center justify-center rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.25)]"
                onClick={onCloseCallback}
            >
                <img width={22} height={22} src={closeIcon.src} alt="close" />
            </button>
            <h3 className="pt-8 px-8 text-nowrap">{order?.title ?? ''}</h3>
            <div className="mt-2 px-8 pb-2  flex items-center border-b border-b-[#f0f3f5]">
                <button
                    className="w-4 h-4 flex items-center rounded-full cursor-pointer bg-[#8bc34a]"
                    onClick={onCloseCallback}
                >
                    <img src={plusIcon.src} alt="add" color="#ff0000" />
                </button>
                <div className="ml-4 text-[#8bc34a]">Add Product</div>
            </div>

            {productElements}
        </div>
    );
}
