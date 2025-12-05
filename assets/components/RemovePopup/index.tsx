import closeIcon from '@/assets/icons/x-gray.svg';
import trashIcon from '@/assets/icons/trash-red.svg';
import { ReactNode } from 'react';
import Image from 'next/image';

type Props = {
    title: string;
    onClose?: () => void;
    onAccept?: () => void;
    onDecline?: () => void;
    children?: ReactNode;
};

export default function RemoveOrderPopup({
    title,
    onClose,
    onAccept,
    onDecline,
    children,
}: Props) {
    const handleClose = () => {
        onClose?.();
    };

    const handleAccept = () => {
        onAccept?.();
    };

    const handleDecline = () => {
        onDecline?.();
    };

    return (
        <div className="absolute w-full h-full bg-[#000000]/50 flex justify-center items-center left-0 top-0">
            <div className="relative bg-white w-[798px]">
                <button
                    className="absolute -right-6 -top-6 bg-white cursor-pointer w-11 h-11 flex items-center justify-center rounded-full shadow-[4px_4px_8px_rgba(0,0,0,0.25)]"
                    onClick={handleClose}
                >
                    <img
                        width={22}
                        height={22}
                        src={closeIcon.src}
                        alt="close"
                    />
                </button>
                <div className="pt-9 px-9 border-b border-b-[#f0f3f5]">
                    <div className="w-full min-h-[88]">
                        <p className="">{title}</p>
                    </div>

                    {children}
                </div>
                <div className="pt-[14px] px-9 pb-[18px] flex justify-end h-[116px] items-center gap-5 bg-[#86bd47] w-full">
                    <button
                        className="text-white font-bold"
                        onClick={handleDecline}
                    >
                        ОТМЕНИТЬ
                    </button>
                    <button
                        className="h-10 w-[178px] text-[#e8364f] flex justify-center items-center gap-4 rounded-full bg-white"
                        onClick={handleAccept}
                    >
                        <Image
                            src={trashIcon}
                            alt="Remove"
                            width={12}
                            height={12}
                        />
                        УДАЛИТЬ
                    </button>
                </div>
            </div>
        </div>
    );
}
