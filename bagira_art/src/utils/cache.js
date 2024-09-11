// Utility to fetch from localStorage
export const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

export const getCachedData = (key) => {
  if (typeof window === "undefined") return null; // Avoid SSR issues
  const cachedData = localStorage.getItem(key);
  const cachedTimestamp = localStorage.getItem(`${key}Timestamp`);
  const isValidCache =
    cachedTimestamp && Date.now() - parseInt(cachedTimestamp) < CACHE_DURATION;
  try {
    return isValidCache ? JSON.parse(cachedData) : null;
  } catch (err) {
    console.error("Failed to parse cached data", err);
    return null;
  }
};

export const setCachedData = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
  localStorage.setItem(`${key}Timestamp`, Date.now().toString());
};