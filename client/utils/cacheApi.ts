import api from "./axios";
import { getDB } from "./db";

export const getCachedOrFreshData = async (key: string, url: string) => {
  const db = await getDB();
  const cached = await db.get("api-cache", key);

  try {
    const response = await api.get(url, {
      headers: {
        "x-rapidapi-key": "90845d6062msh1bd8c7755c03cb9p134c77jsn26ca06c37106",
        "x-rapidapi-host": "api-nba-v1.p.rapidapi.com",
      },
    });
    const version = response.headers['x-rapidapi-version'];
    const data = response?.data;

    if (!cached || cached.version !== version) {
      console.log("Fetched fresh data");
      await db.put("api-cache", { data, version }, key);
      return data;
    }

    console.log("Using cached data");
    return cached.data;
  } catch (err) {
    console.warn("API failed, falling back to cache", err);
    return cached?.data || null;
  }
};


export const getCachedData = async (key: string) => {
    const db = await getDB();
    const cached = await db.get("api-cache", key);
  
    try {
      console.log("Using cached data");
      return cached.data;
    } catch (err) {
      console.warn("API failed, falling back to cache", err);
      return cached?.data || null;
    }
  };
  
  
  