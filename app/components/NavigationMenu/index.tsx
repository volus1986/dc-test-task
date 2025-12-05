import Profile from './Profile';
import Links from '@/app/components/NavigationMenu/Links';

export default function NavigationMenu() {
    return (
        <div
            className={`
            flex-shrink-0 w-60 h-full bg-[#f0f3f5] mr-4
            shadow-[12px_0_24px_-12px_rgba(0,0,0,0.25)]
        `}
        >
            <Profile />
            <Links />
        </div>
    );
}
