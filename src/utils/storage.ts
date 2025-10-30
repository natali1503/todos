export const STORAGE_KEYS = {
  todos: 'todos',
} as const;

export const storage = {
  load: <T>(key: string): T | null => {
    const jsonData = localStorage.getItem(key);
    if (!jsonData) return null;
    return JSON.parse(jsonData) as T;
  },

  save: <T>(key: string, data: T): void => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  },

  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
};

export const loadFromLocalStorage = storage.load;
export const saveToLocalStorage = storage.save;
export const removeLocalStorage = storage.remove;
export const keyForLocalStorage = STORAGE_KEYS;
