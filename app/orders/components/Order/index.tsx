import Image from 'next/image';
import trashIcon from '@/assets/icons/trash-gray.svg';
import buttonProductListIcon from '@/assets/icons/button-products-list-gray.svg';
import parseDateTimeString from '@/utils/parseDateString';
import getProductLengthText from '@/utils/getProductLengthText';
import ButtonIcon from '@/assets/components/ButtonIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import getProductPricesAmount from '@/utils/getProductsPriceAmount';

type propsType = {
    id: number;
    title: string;
    dateTimeString: string;
    hideOrderName: boolean;
    showOrderDetailsHandler: (id: number) => void;
};

export default function Order({
    id,
    title,
    dateTimeString,
    hideOrderName,
    showOrderDetailsHandler,
}: propsType) {
    const orderProducts = useSelector(
        (state: RootState) => state.products,
    ).filter((product) => product.order === id);

    const date = parseDateTimeString(dateTimeString);

    const removeOrder = () => {
        console.log(`Remove order with id: ${id}`); // todo: Placeholder for actual remove logic
    };

    const showOrderDetails = () => {
        showOrderDetailsHandler(id);
    };

    const prices = orderProducts.map((orderProduct) => orderProduct.price);
    const priceAmount = getProductPricesAmount(prices);

    return (
        <div className="px-[25] py-4 flex items-center w-full border border-[#cfd8dc] rounded-sm bg-white">
            {hideOrderName && (
                <div className="flex flex-1 overflow-hidden underline">
                    {title}
                </div>
            )}
            <div className="flex flex-1 min-w-[340px] items-center justify-between">
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
                        {orderProducts.length}
                    </p>
                    <p className="text-[10px] text-[#90a4ae]">
                        {getProductLengthText(orderProducts.length)}
                    </p>
                </div>
                <div className="w-[25%] min-w-fit">
                    <p className="text-[10px] text-[#90a4ae]">{`${date.monthNumber} / ${date.year}`}</p>
                    <p className="text-[14px] text-[#546e7a]">{`${date.day} / ${date.monthName} / ${date.year}`}</p>
                </div>
                <div className="w-[25%] min-w-fit">
                    <p className="text-[10px] text-[#90a4ae]">{`${priceAmount.USD ? priceAmount.USD + ' $' : ''}`}</p>
                    <p className="text-[14px] text-[#546e7a]">{`${priceAmount.UAH} UAH`}</p>
                </div>
                <ButtonIcon iconUrl={trashIcon} onClick={removeOrder} />
            </div>
        </div>
    );
}
