const url = process.env.NEXT_PUBLIC_BACKEND_SERVICE_URL;
const port = process.env.NEXT_PUBLIC_BACKEND_SERVICE_PORT;

export const BACKEND_URL = (() => {
    if (!url) return `http://localhost:${port ?? 3001}`;

    const hasPort = /:\d+$/.test(url);

    return port && !hasPort ? `${url}:${port}` : url;
})();
