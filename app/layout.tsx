import type { Metadata } from 'next';
import './globals.css';
import TopMenu from '@/app/components/TopMenu';
import NavigationMenu from '@/app/components/NavigationMenu';

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
                <TopMenu />
                <div className="flex flex-1">
                    <NavigationMenu />
                    <main className="flex-1 overflow-auto">{children}</main>
                </div>
            </body>
        </html>
    );
}
