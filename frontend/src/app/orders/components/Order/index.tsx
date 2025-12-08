import Image from 'next/image';
import trashIcon from '@/src/assets/icons/trash-gray.svg';
import rightIconArrow from '@/src/assets/icons/chevron-right-white.svg';
import buttonProductListIcon from '@/src/assets/icons/button-products-list-gray.svg';
import parseDateTimeString from '@/src/utils/parseDateString';
import getProductLengthText from '@/src/utils/getProductLengthText';
import ButtonIcon from '@/src/components/ButtonIcon';
import { useSelector } from 'react-redux';
import { RootState } from '@/src/store';
import getProductPricesAmount from '@/src/utils/getProductsPriceAmount';
import usePopup from '@/src/components/RemovePopup';
import { useAppDispatch } from '@/src/store/hooks';
import { deleteOrder } from '@/src/store/slices/orders';

type propsType = {
    id: number;
    title: string;
    dateTimeString: string;
    showSimplified: boolean;
    isOpened: boolean;
    showOrderDetailsHandler: (id: number) => void;
};

export default function Order({
    id,
    title,
    dateTimeString,
    showSimplified,
    isOpened,
    showOrderDetailsHandler,
}: propsType) {
    const dispatch = useAppDispatch();
    const RemovePopup = usePopup();
    const orderProducts = useSelector(
        (state: RootState) => state.products.products,
    ).filter((product) => product.order === id);

    const date = parseDateTimeString(dateTimeString);

    const showOrderDetails = () => {
        showOrderDetailsHandler(id);
    };

    const prices = orderProducts.map((orderProduct) => orderProduct.price);
    const priceAmount = getProductPricesAmount(prices);

    const removePopupContentRender = (
        <div className="w-full flex">
            <div className="underline decoration-gray-500 text-nowrap overflow-hidden">
                {title}
            </div>
        </div>
    );

    const removeOrderClickHandler = () => {
        RemovePopup.openPopup({
            title: 'Вы уверены что хотите удалить этот приход?',
            content: removePopupContentRender,
            onAccept: () => {
                dispatch(deleteOrder(id));

                console.log(`Order with id ${id} was removed`);
            },
            onDecline: () => {
                console.log('Order removal cancelled');
            },
        });
    };

    return (
        <div className="flex border border-[#cfd8dc] rounded-sm bg-white justify-between max-w-[1200px]">
            <div
                className={`
                    px-[25] py-4 flex items-center
                    ${!showSimplified && 'w-full'}
                `}
            >
                {!showSimplified && (
                    <div className="flex flex-1 overflow-hidden underline text-nowrap">
                        {title}
                    </div>
                )}
                <div
                    className={`
                    flex flex-1 items-center justify-between
                    ${!showSimplified && 'ml-2'}
                `}
                >
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
                    <div className="w-14 ml-4">
                        <p className="text-[16px] text-[#546e7a]">
                            {orderProducts.length}
                        </p>
                        <p className="text-[10px] text-[#90a4ae]">
                            {getProductLengthText(orderProducts.length)}
                        </p>
                    </div>
                    <div className="w-32 min-w-fit ml-9">
                        <p className="text-[10px] text-[#90a4ae]">{`${date.monthNumber} / ${date.year}`}</p>
                        <p className="text-[14px] text-[#546e7a]">{`${date.day} / ${date.monthName} / ${date.year}`}</p>
                    </div>
                    {!showSimplified && (
                        <>
                            <div className="w-28 min-w-fit">
                                <p className="text-[10px] text-[#90a4ae]">{`${priceAmount.USD ? priceAmount.USD + ' $' : ''}`}</p>
                                <p className="text-[14px] text-[#546e7a]">{`${priceAmount.UAH ?? 0} UAH`}</p>
                            </div>
                            <ButtonIcon
                                iconUrl={trashIcon}
                                onClick={removeOrderClickHandler}
                            />
                        </>
                    )}
                </div>
            </div>
            {showSimplified && (
                <div
                    className={`
                     flex justify-center items-center w-[45px] grow-0 shrink-0
                    ${isOpened ? 'bg-[#cfd8dc] ' : ''}
                    `}
                >
                    {isOpened && (
                        <Image
                            src={rightIconArrow}
                            alt=">"
                            width={12}
                            height={12}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
