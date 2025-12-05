import Image from 'next/image';

type Props = {
    onClick?: () => void;
    iconUrl: string;
};

export default function ButtonIcon({ onClick, iconUrl }: Props) {
    return (
        <button className="w-auto cursor-pointer" onClick={onClick}>
            <Image src={iconUrl} alt="Remove" width="12" height="12" />
        </button>
    );
}
