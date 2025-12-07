import closeIcon from '@/src/assets/icons/x-gray.svg';
import trashIcon from '@/src/assets/icons/trash-red.svg';
import Image from 'next/image';
import { ReactNode, useEffect, useState, MouseEvent } from 'react';

export type PopupOptions = {
    title: string;
    onAccept?: () => void;
    onDecline?: () => void;
    content?: ReactNode;
};

export default function Popup({
    title,
    onAccept,
    onDecline,
    content,
}: PopupOptions) {
    const [isRendered, setIsRendered] = useState<boolean>(false);

    useEffect(() => {
        setIsRendered(true);
    }, []);

    const handleAccept = (e: MouseEvent) => {
        e.stopPropagation();
        onAccept?.();
    };

    const handleDecline = (e: MouseEvent) => {
        e.stopPropagation();
        onDecline?.();
    };

    return (
        <div
            className={`
                absolute w-full h-full bg-[#000000]/50 flex justify-center items-center left-0 top-0
                transition-opacity duration-500 ease-in-out ${isRendered ? 'opacity-100' : 'opacity-0'}
            `}
            onClick={handleDecline}
        >
            <div
                className="relative bg-white w-[798px]"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute -right-6 -top-6
                    bg-white cursor-pointer w-11 h-11 shadow-[4px_4px_8px_rgba(0,0,0,0.25)]
                    flex items-center justify-center rounded-full"
                    onClick={handleDecline}
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

                    {content}
                </div>
                <div className="pt-[14px] px-9 pb-[18px] flex justify-end h-[116px] items-center gap-5 bg-[#86bd47] w-full">
                    <button
                        className="text-white font-bold cursor-pointer"
                        onClick={handleDecline}
                    >
                        ОТМЕНИТЬ
                    </button>
                    <button
                        className="h-10 w-[178px] text-[#e8364f] flex justify-center items-center gap-4 rounded-full bg-white cursor-pointer"
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
