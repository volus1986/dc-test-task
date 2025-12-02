import Image from 'next/image';
import trashIcon from './icons/trash.svg';
import buttonProductListIcon from './icons/button-products-list.svg';
import parseDateTimeString from '@/utils/parseDateString';

type propsType = {
    id: number;
    title: string;
    dateTimeString: string;
    productIds: number[];
    amountUsd: number;
    amountUah: number;
};

export default function Order({
    id,
    title,
    dateTimeString,
    productIds,
    amountUsd,
    amountUah,
}: propsType) {
    const date = parseDateTimeString(dateTimeString);

    const removeOrder = () => {
        console.log(`Remove order with id: ${id}`); // todo: Placeholder for actual remove logic
    };

    const showOrderDetails = () => {
        console.log(`Show order details: ${id}`); // todo: Placeholder for actual remove logic
    };

    const getProductText = () => {
        const count = productIds.length;
        const lastTwo = count % 100;
        const lastOne = count % 10;

        if (lastTwo >= 11 && lastTwo <= 14) return 'Продуктов';

        if (lastOne === 1) return 'Продукт';
        if (lastOne >= 2 && lastOne <= 4) return 'Продукта';

        return 'Продуктов';
    };

    return (
        <div className="px-[25] py-4 flex items-center w-full border border-[#cfd8dc] rounded-sm">
            <div className="w-[50%] overflow-hidden underline">{title}</div>
            <div className="w-[50%] flex items-center justify-between">
                <button
                    className="w-10 h-10 rounded-full border border-[#d0d9dd] flex items-center justify-center cursor-pointer min-w-fit"
                    onClick={showOrderDetails}
                >
                    <Image
                        src={buttonProductListIcon}
                        alt="Remove"
                        width="22"
                        height="22"
                    />
                </button>
                <div className="w-[20%] min-w-fit">
                    <p className="text-[16px] text-[#546e7a]">
                        {productIds.length}
                    </p>
                    <p className="text-[10px] text-[#90a4ae]">
                        {getProductText()}
                    </p>
                </div>
                <div className="w-[25%] min-w-fit">
                    <p className="text-[10px] text-[#90a4ae]">{`${date.monthNumber} / ${date.year}`}</p>
                    <p className="text-[14px] text-[#546e7a]">{`${date.day} / ${date.monthName} / ${date.year}`}</p>
                </div>
                <div className="w-[25%] min-w-fit">
                    <p className="text-[10px] text-[#90a4ae]">{`${amountUsd ? amountUsd + ' $' : ''}`}</p>
                    <p className="text-[14px] text-[#546e7a]">{`${amountUah} UAH`}</p>
                </div>
            </div>
            <div>
                <button className="w-auto cursor-pointer" onClick={removeOrder}>
                    <Image
                        src={trashIcon}
                        alt="Remove"
                        width="12"
                        height="12"
                    />
                </button>
            </div>
        </div>
    );
}
