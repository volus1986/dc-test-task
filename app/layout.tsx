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
        <html lang="en" className="h-full">
            <body className="h-full flex flex-col">
                <StoreProvider>
                    <TopMenu />
                    <div className="flex flex-1">
                        <NavigationMenu />
                        <main className="flex-1 overflow-auto">{children}</main>
                    </div>
                </StoreProvider>
            </body>
        </html>
    );
}
