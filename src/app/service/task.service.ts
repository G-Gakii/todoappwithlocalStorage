import { Injectable } from '@angular/core';
import { Itask } from '../interface/itask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  setItem(key: string, value: Itask[]) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  getItem(key: string) {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  clear() {
    localStorage.clear();
  }
}
