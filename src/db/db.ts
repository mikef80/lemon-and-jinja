let request: IDBOpenDBRequest;
let db: IDBDatabase;
let version = 1;

export interface User {
  id: string;
  name: string;
  email: string;
}

export enum Stores {
  Users = "users",
}

export const initDB = (): Promise<boolean> => {
  return new Promise((resolve) => {
    // open the connection
    request = indexedDB.open("myDB");

    request.onupgradeneeded = () => {
      db = request.result;

      //   if the data object store doesn't exist, create it
      if (!db.objectStoreNames.contains(Stores.Users)) {
        console.log("Creating users store");
        db.createObjectStore(Stores.Users, { keyPath: "id" });
      }
      //   no need to resolve here
    };

    request.onsuccess = () => {
      db = request.result;
      version = db.version;
      console.log("request.onsuccess - initDB", version);
      resolve(true);
    };

    request.onerror = () => {
      resolve(false);
    };
  });
};

export const addData = <T>(
  storeName: string,
  data: T
): Promise<T | String | null> => {
  return new Promise((resolve) => {
    request = indexedDB.open("myDB", version);

    request.onsuccess = () => {
      console.log("request.onsucess - addData", data);
      db = request.result;
      const tx = db.transaction(storeName, "readwrite");
      const store = tx.objectStore(storeName);
      store.add(data);
      resolve(data);
    };

    request.onerror = () => {
      const error = request.error?.message;
      if (error) {
        resolve(error);
      } else {
        resolve("Unknown error");
      }
    };
  });
};
