import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items: Item[] = []; // Données stockées localement
  private idCounter = 1;     // Compteur pour générer des IDs uniques

  constructor() {}

  // CRUD Operations
  getItems(): Item[] {
    return this.items;
  }

  createItem(item: Omit<Item, 'id'>): Item {
    const newItem: Item = { id: this.idCounter++, ...item };
    this.items.push(newItem);
    return newItem;
  }

  updateItem(id: number, updatedItem: Partial<Item>): Item | undefined {
    const index = this.items.findIndex((item) => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      return this.items[index];
    }
    return undefined;
  }

  deleteItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id);
  }
}
