import type { Metadata } from 'next';
import './globals.css';
import TopMenu from '@/app/components/TopMenu';
import NavigationMenu from '@/app/components/NavigationMenu';
import StoreProvider from '@/store/Provider';

export const metadata: Metadata = {
    title: 'Orders & Products',
    description: 'Orders & Products',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full min-w-full w-fit">
            <body className="h-full min-w-full flex flex-col overflow-auto">
                <StoreProvider>
                    <TopMenu />
                    <div className="flex flex-1">
                        <NavigationMenu />
                        {children}
                    </div>
                </StoreProvider>
            </body>
        </html>
    );
}
