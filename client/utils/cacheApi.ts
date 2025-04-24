import { first } from "lodash";
import api from "./axios";
import { getDB } from "./db";
import { Player } from "../models/Player.model";

const DB_STORE_NAME = process.env.LOCAL_STORE_NAME || "api-cache";

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
    const version = response.headers["x-rapidapi-version"];
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

export const getCachedPlayersData = async (): Promise<Player[]> => {
  const db = await getDB();
  const tx = db.transaction(DB_STORE_NAME, "readonly");
  const store = tx.objectStore(DB_STORE_NAME);

  const allKeys = await store.getAllKeys();
  const playerKeys = allKeys.filter(
    (key) => typeof key === "string" && key.startsWith("player-details-")
  );

  const players = await Promise.all(playerKeys.map((key) => store.get(key)));

  return players.map((player) => {
    const playerDetails = first(player.data.response);
    return playerDetails as Player;
  });
};
