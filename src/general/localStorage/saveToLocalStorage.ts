export const saveToLocalStorage = <T>(key: string, data: T): void => {
  const jsonData = JSON.stringify(data);
  localStorage.setItem(key, jsonData);
};
