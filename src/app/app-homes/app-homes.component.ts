import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {DataService} from './data.service';

@Component({
  selector: 'app-app-homes',
  templateUrl: './app-homes.component.html',
  styleUrls: ['./app-homes.component.less']
})
export class AppHomesComponent implements OnInit {

  items$;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.items$ = this.dataService.getHomeItems$();

    /*this.items$ = of([
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
    ]);*/
  }

}
