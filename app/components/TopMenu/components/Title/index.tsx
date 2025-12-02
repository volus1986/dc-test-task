import Image from "next/image";
import logoIcon from '@/assets/icons/logo.png';

export default function Title(){
    return <div className={`flex gap-x-10 items-center`}>
        <Image
            width="42"
            height="42"
            src={logoIcon}
            alt="Logo"
        />
        <h5 className={'text-[#7cb342]'}>INVENTORY</h5>
    </div>
}