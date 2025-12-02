'use client';

import Image from 'next/image';
import clockIcon from '@/assets/icons/header-clock.png';
import { useEffect, useState } from 'react';

export default function DateTime() {
    const [now, setNow] = useState(new Date());
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => {
            setNow(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!mounted) return null;

    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const year = now.getFullYear();
    const time = now.toLocaleString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    });

    return (
        <div className={`fit-content`}>
            <div>Today</div>
            <div className={`flex flex-nowrap`}>
                <div>{`${day} ${month}, ${year}`}</div>
                <div className={'ml-5 flex flex-nowrap items-center'}>
                    <Image width="16" height="16" src={clockIcon} alt="Logo" />
                    <span className="relative ml-2">{`${time}`}</span>
                </div>
            </div>
        </div>
    );
}
