'use client';

import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export default function ActiveClientCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const socket = io('http://localhost:3001');

        socket.on('activeCount', (value) => {
            setCount(value);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div className="w-fit ml-4 grid justify-center justify-items-center">
            <p>Active clients:</p>
            <p className="w-fit">{count}</p>
        </div>
    );
}
