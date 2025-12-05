import trashIcon from '@/assets/icons/trash-gray.svg';
import parseDateTimeString from '@/utils/parseDateString';
import ButtonIcon from '@/assets/components/ButtonIcon';
import ProductStatusIcon, {
    STATUSES,
} from '@/app/components/ProductStatusIcon';
import Image from 'next/image';

type propsType = {
    id: number;
    status: string;
    imageUrl: string;
    title: string;
    serialNumber: number | string;
    guaranteeStart: string;
    guaranteeEnd: string;
    isNew: boolean;
    prices: {
        value: number;
        symbol: string;
    }[];
    groupName: string;
    userName?: string;
    orderName: string;
    orderDateTimeString: string;
};

export default function Product({
    id,
    status,
    imageUrl,
    title,
    serialNumber,
    guaranteeStart,
    guaranteeEnd,
    isNew,
    prices,
    groupName,
    userName,
    orderName,
    orderDateTimeString,
}: propsType) {
    const removeProduct = () => {
        console.log(`Remove order with id: ${id}`); // todo: Placeholder for actual remove logic
    };

    const statusTextRender = () => {
        if (status === STATUSES.free) {
            return <span className="text-[#cddc39]">свободен</span>;
        } else {
            return <span className="text-black">В ремонте</span>;
        }
    };

    const guaranteeDatesRender = () => {
        const dateFrom = parseDateTimeString(guaranteeStart);
        const dateTo = parseDateTimeString(guaranteeEnd);
        return (
            <div>
                <div className="flex justify-between">
                    <div>c</div>
                    <div>{`${dateFrom.day} / ${dateFrom.monthNumber} / ${dateFrom.year}`}</div>
                </div>
                <div className="flex justify-between">
                    <div>по</div>
                    <div>{`${dateTo.day} / ${dateTo.monthNumber} / ${dateTo.year}`}</div>
                </div>
            </div>
        );
    };

    const orderDateRender = () => {
        const date = parseDateTimeString(orderDateTimeString);
        return (
            <div className="w-32">
                <p className="text-[10px] text-[#90a4ae]">{`${date.monthNumber} / ${date.year}`}</p>
                <p className="text-[14px] text-[#546e7a]">{`${date.day} / ${date.monthName} / ${date.year}`}</p>
            </div>
        );
    };

    const priceUAH = prices.find((price) => price.symbol === 'UAH')?.value;
    const priceUSD = prices.find((price) => price.symbol === 'USD')?.value;

    return (
        <div className="px-[25] py-4 flex items-center w-full border border-[#cfd8dc] rounded-sm">
            <div className="flex flex-1 min-w-[340px] items-center justify-between">
                <ProductStatusIcon status={status} />

                <Image src={imageUrl} alt="Img" width={48} height={48} />

                <div className="grow">
                    <p className="underline decoration-gray-500">{title}</p>
                    <p>{serialNumber}</p>
                </div>

                <div>{statusTextRender()}</div>

                <div>{guaranteeDatesRender()}</div>

                <div>{isNew ? 'новый' : 'Б / У'}</div>

                <div className="w-28 min-w-fit">
                    <p className="text-[10px] text-[#90a4ae]">{`${priceUSD ? priceUSD + ' $' : ''}`}</p>
                    <p className="text-[14px] text-[#546e7a]">{`${priceUAH ?? 0} UAH`}</p>
                </div>

                <div className="flex items-center">
                    <span className="underline decoration-gray-500">
                        {groupName || '-'}
                    </span>
                </div>

                <div className="flex items-center">
                    <span className="underline decoration-gray-500">
                        {userName || '-'}
                    </span>
                </div>

                <div className="flex items-center">
                    <span className="underline decoration-gray-500">
                        {orderName}
                    </span>
                </div>

                <div>{orderDateRender()}</div>

                <ButtonIcon onClick={removeProduct} iconUrl={trashIcon} />
            </div>
        </div>
    );
}
