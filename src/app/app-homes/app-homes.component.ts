import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';

@Component({
  selector: 'app-app-homes',
  templateUrl: './app-homes.component.html',
  styleUrls: ['./app-homes.component.less']
})
export class AppHomesComponent implements OnInit {

  items$;
  constructor() { }

  ngOnInit() {
    // this.items$ = this.dataService.getItems$();
    this.items$ = of([
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
