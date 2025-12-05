import trashIcon from '@/src/assets/icons/trash-gray.svg';
import parseDateTimeString from '@/src/utils/parseDateString';
import ButtonIcon from '@/src/components/ButtonIcon';
import ProductStatusIcon, {
    STATUSES,
} from '@/src/app/components/ProductStatusIcon';
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
                    <div className="flex items-center text-[10px] text-[#90a4ae]">
                        c
                    </div>
                    <div className="text-[14px] text-[#546e7a]">{`${dateFrom.day} / ${dateFrom.monthNumber} / ${dateFrom.year}`}</div>
                </div>
                <div className="flex justify-between">
                    <div className="flex items-center text-[10px] text-[#90a4ae]">
                        по
                    </div>
                    <div className="text-[14px] text-[#546e7a]">{`${dateTo.day} / ${dateTo.monthNumber} / ${dateTo.year}`}</div>
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
        <div className="px-[25] py-4 flex items-center w-full bg-white border border-[#cfd8dc] rounded-sm">
            <div className="h-10 flex min-w-[640px] items-center overflow-hidden">
                <ProductStatusIcon status={status} />

                <div className="ml-8 w-11">
                    <Image src={imageUrl} alt="Img" width={48} height={48} />
                </div>

                <div className="ml-8 w-[432px] overflow-hidden h-full">
                    <p className="underline decoration-gray-500 text-[14px] text-[#546e7a] text-nowrap overflow-hidden pl-1">
                        {title}
                    </p>
                    <p>{serialNumber}</p>
                </div>

                <div className="ml-12 w-30">{statusTextRender()}</div>

                <div className="ml-2 w-28">{guaranteeDatesRender()}</div>

                <div className="ml-10 w-32 text-[14px] text-[#546e7a]">
                    {isNew ? 'новый' : 'Б / У'}
                </div>

                <div className="ml-2 w-[140px]">
                    <p className="text-[10px] text-[#90a4ae]">{`${priceUSD ? priceUSD + ' $' : ''}`}</p>
                    <p className="text-[14px] text-[#546e7a]">{`${priceUAH ?? 0} UAH`}</p>
                </div>

                <div className="ml-2 w-[400px] flex overflow-hidden h-full">
                    <span className="underline decoration-gray-500 text-[14px] text-[#546e7a]">
                        {orderName}
                    </span>
                </div>

                <div className="ml-2 w-32">{orderDateRender()}</div>

                <div className="ml-7">
                    <ButtonIcon onClick={removeProduct} iconUrl={trashIcon} />
                </div>
            </div>
        </div>
    );
}
