const url = process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL ?? 'http://localhost';
const port = process.env.NEXT_PUBLIC_BACKEND_SERVICE_PORT ?? '3001';

const hasPort = /:\d+$/.test(url);

export const BACKEND_URL = port && !hasPort ? `${url}:${port}` : url;
console.log(BACKEND_URL);