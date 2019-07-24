import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.less']
})
export class AppHeaderComponent implements OnInit {

  menuList = [
    {
      label: 'Home',
      href: '#home',
      active: 'uk-active',
    },
    {
      label: 'About',
      href: '#about',
      active: '',
    },
    {
      label: 'Contact',
      href: '#contact',
      active: '',
    }
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
