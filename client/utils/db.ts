import { openDB } from "idb";

export const getDB = () => {
  return openDB("MyAppDB", 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains("api-cache")) {
        db.createObjectStore("api-cache");
      }
    },
  });
};
