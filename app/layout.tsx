import type { Metadata } from 'next';
import './globals.css';
import TopMenu from '@/app/components/TopMenu';
import NavigationMenu from '@/app/components/NavigationMenu';
import StoreProvider from '@/store/Provider';
import { PopupProvider } from '@/components/RemovePopup';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Orders & Products',
    description: 'Orders & Products',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" className="h-full min-w-full w-fit">
            <body className="h-full min-w-full flex flex-col overflow-auto">
                <StoreProvider>
                    <TopMenu />
                    <div className="flex flex-1 bg-[#f0f3f5]">
                        <NavigationMenu />
                        <div className="relative w-full">
                            <PopupProvider>{children}</PopupProvider>
                        </div>
                    </div>
                </StoreProvider>
            </body>
        </html>
    );
}
