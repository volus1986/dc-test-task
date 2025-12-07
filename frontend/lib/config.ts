const url = process.env.NEXT_PUBLIC_BACKEND_URL ?? 'http://localhost';
const port = process.env.BACKEND_SERVICE_PORT ?? '3001';

export const BACKEND_URL = `${url}:${port}`;
