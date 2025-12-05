import Title from './components/Title';
import DateTime from '@/app/components/TopMenu/components/DateTime';

export default function TopMenu() {
    return (
        <div
            className={`
            bg-white sticky
            flex justify-center items-center flex-shrink-0
            w-full h-[75px] pl-56 pr-36 min-w-[700px]
            shadow-[0_12px_24px_-12px_rgba(0,0,0,0.2)]
            `}
        >
            <div className={`w-full flex justify-between`}>
                <Title />
                <DateTime />
            </div>
        </div>
    );
}
