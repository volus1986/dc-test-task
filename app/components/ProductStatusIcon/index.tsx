export const STATUSES = {
    free: 'free',
    repairing: 'repairing',
};

type Props = {
    status: (typeof STATUSES)[keyof typeof STATUSES];
};

export default function ProductStatusIcon({ status }: Props) {
    const color =
        {
            [STATUSES.free]: '#cddc39',
            [STATUSES.repairing]: '#000000',
        }[status] ?? '#808080';
    return (
        <div
            style={{ backgroundColor: color }}
            className="rounded-full w-3 h-3"
        ></div>
    );
}
