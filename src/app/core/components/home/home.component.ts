import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  newlastElement: any;
  newfirsttElement: any;
  cardItems = [
    { id: 1, title: 'Mobile internet', linkText: 'Start here', routerLink: '' },
    { id: 2, title: 'Home internet', linkText: 'Start here', routerLink: '' },
    { id: 3, title: 'Get a device', linkText: 'Start here', routerLink: '' },
    { id: 4, title: 'Add a phone-line', linkText: 'Start here', routerLink: '' },
    { id: 5, title: 'Upgrade', linkText: 'Start here', routerLink: '' }
  ];
  queryResult: any;

  constructor() { }

  ngOnInit(): void {}

  left(): void {
    this.newlastElement = this.cardItems.shift();
    this.cardItems.push(this.newlastElement);
  }

  right(): void{
    this.newfirsttElement = this.cardItems[(this.cardItems.length - 1)];
    this.cardItems.pop();
    this.cardItems.unshift(this.newfirsttElement);
  }
}
