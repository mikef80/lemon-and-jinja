// db.ts
import Dexie, { Table } from 'dexie';

export interface Item {
  itemId: number;
  name: string;
  weight: number;
  favourite: boolean;
}

export class MySubClassedDexie extends Dexie {
  // 'items' is added by dexie when declaring the stores()
  // We just tell the typing system this is the case
  items!: Table<Item>; 

  constructor() {
    super('myDatabase');
    this.version(1).stores({
      items: '++itemId, name, weight, favourite' // Primary key and indexed props
    });
  }
}

export const db = new MySubClassedDexie();