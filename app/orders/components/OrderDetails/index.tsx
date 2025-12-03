import plusIcon from '@/assets/icons/plus-white.svg';
import closeIcon from '@/assets/icons/x-gray.svg';

function getProductsByOrderId(orderId: number) {
    return [];
}

type Props = {
    orderId: number;
    onCloseCallback: () => void;
};

export default function OrderDetails({ orderId, onCloseCallback }: Props) {
    return (
        <div className="p-8 border border-[#cfd8dc] rounded-sm relative w-[960px]">
            <button
                className="absolute -right-6 -top-6 bg-white cursor-pointer w-11 h-11 flex items-center justify-center rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.25)]"
                onClick={onCloseCallback}
            >
                <img width={22} height={22} src={closeIcon.src} alt="close" />
            </button>
            <div>
                Order Details Component aslkdjf salgj sdlfgjh sdlfjg
                al;sdjflasdjf lsadfkjg dskljfgh asldf jlkasjf lsdfg dlskdjf
                lskdfgjdfghsjdfghklj{' '}
            </div>
            <div className="mt-6 flex items-center">
                <button
                    className="w-4 h-4 flex items-center rounded-full cursor-pointer bg-[#8bc34a]"
                    onClick={onCloseCallback}
                >
                    <img src={plusIcon.src} alt="add" color="#ff0000" />
                </button>
                <div className="ml-4">Add Product</div>
            </div>
        </div>
    );
}
