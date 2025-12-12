'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
    {
        name: 'ORDERS',
        href: '/orders',
    },
    {
        name: 'PRODUCTS',
        href: '/products',
    },
];

export default function Links() {
    const pathname = usePathname();

    const items = navItems.map((item, i) => {
        const isActive = pathname === item.href;

        return (
            <div className="w-full h-10 flex justify-center" key={i}>
                <Link
                    href={item.href}
                    className={`${isActive && 'underline decoration-green-500 underline-offset-8 decoration-2'}`}
                >
                    {item.name}
                </Link>
            </div>
        );
    });

    return <>{items}</>;
}
