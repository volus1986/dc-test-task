import Image from 'next/image';
import ProductStatusIcon from '@/src/app/components/ProductStatusIcon';

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
        </div>
    );
}
