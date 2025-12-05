import Image from 'next/image';
import placeholderImage from '@/public/images/no-image.svg';
import settingsImage from './icons/profile-settings.svg';

import Link from 'next/link';

export default function Profile() {
    return (
        <div className={`w-full h-60 flex justify-center items-center`}>
            <div className={`relative`}>
                <Image
                    className={`rounded-full`}
                    src={placeholderImage}
                    alt="Profile Placeholder"
                    width={96}
                    height={96}
                />
                <div className="absolute -right-2 -bottom-2 w-[42px] h-[42px] rounded-full bg-white flex justify-center items-center">
                    <Link href={`/`}>
                        <Image
                            src={settingsImage}
                            width="14"
                            height="14"
                            alt="Settings Icon"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}
