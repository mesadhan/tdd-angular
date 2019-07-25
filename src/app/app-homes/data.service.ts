import { Injectable } from '@angular/core';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  getHomeItems$() {
    return of([
      {
        title: 'Trulli',
        image: 'https://www.w3schools.com/html/pic_trulli.jpg',
        location: 'USA',
      },
      {
        title: 'Mac Computer',
        image: 'https://www.w3schools.com/w3images/mac.jpg',
        location: 'UK',
      },
      {
        title: 'Flowers in Chania',
        image: 'https://www.w3schools.com/html/img_chania.jpg',
        location: 'Chania',
      }
    ]);
  }
}
