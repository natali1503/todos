export const loadFromLocalStorage = <T>(key: string): T | null => {
  const jsonData = localStorage.getItem(key);
  if (!jsonData) return null;
  return JSON.parse(jsonData) as T;
};
