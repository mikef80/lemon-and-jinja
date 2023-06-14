// db.ts
import Dexie, { Table } from 'dexie';

export interface Item {
  itemId: number;
  name: string;
  weight: number;
  favourite: boolean;
}

export interface Favourite {
  itemId: number;
  name: string;
  favourite: boolean;
}

export class MySubClassedDexie extends Dexie {
  // 'items' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  items!: Table<Item>; 
  favourites!: Table<Favourite>;

  constructor() {
    super('myDatabase');
    this.version(2).stores({
      items: '++itemId, name, weight, favourite', // Primary key and indexed props
      favourites: '++itemId, name, favourite'
    });
  }
}

export const db = new MySubClassedDexie();