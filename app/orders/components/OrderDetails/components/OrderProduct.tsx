import Image from 'next/image';
import ProductStatusIcon from '@/app/components/ProductStatusIcon';
import ButtonIcon from '@/components/ButtonIcon';
import trashIcon from '@/assets/icons/trash-gray.svg';

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
                px-10 py-3 flex items-center justify-items-stretch gap-8
            "
        >
            <ProductStatusIcon status={status} />
            <Image src={imageUrl} alt="Img" width={48} height={48} />
            <div className="grow">
                <p className="underline decoration-gray-500 text-nowrap">
                    {title}
                </p>
                <p>{serialNumber}</p>
            </div>
            <ButtonIcon iconUrl={trashIcon} onClick={handleRemove} />
        </div>
    );
}
