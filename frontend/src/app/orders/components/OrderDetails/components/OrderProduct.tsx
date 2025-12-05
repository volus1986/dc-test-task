import Image from 'next/image';
import ProductStatusIcon from '@/src/app/components/ProductStatusIcon';
import ButtonIcon from '@/src/components/ButtonIcon';
import trashIcon from '@/src/assets/icons/trash-gray.svg';

export type Props = {
    id: number;
    status: string;
    imageUrl: string;
    title: string;
    serialNumber: number | string;
};

export default function OrderProduct({
    id,
    status,
    imageUrl,
    title,
    serialNumber,
}: Props) {
    const handleRemove = () => {
        console.log(`remove product handler for product id: ${id}`);
    };

    return (
        <div
            className="
                border-b border-[#cfd8dc]
                px-10 py-3 flex items-center gap-8
            "
        >
            <div className="w-fit flex items-center">
                <ProductStatusIcon status={status} />
            </div>
            <div className="w-fit flex items-center">
                <Image src={imageUrl} alt="Img" width={48} height={48} />
            </div>
            <div className="w-full">
                <div className="underline decoration-gray-500 text-nowrap">
                    {title}
                </div>
                <p>{serialNumber}</p>
            </div>
            <div className="flex items-center w-3">
                <ButtonIcon iconUrl={trashIcon} onClick={handleRemove} />
            </div>
        </div>
    );
}
