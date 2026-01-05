export const retriveLocalStorage = <T>(key: string): T | null => {
    const data = localStorage.getItem(key);
    if (!data) return null;

    try {
        return JSON.parse(data) as T;
    } catch {
        return null;
    }
};
