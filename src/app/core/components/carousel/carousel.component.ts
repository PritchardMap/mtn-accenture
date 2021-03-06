import { Component, OnInit } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

// import Swiper core and required modules
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  newlastElement: any;
  newfirsttElement: any;
  cardItems = [
    { id: 1, title: 'Mobile internet', routerLink: '' },
    { id: 2, title: 'Home internet', routerLink: '' },
    { id: 3, title: 'Get a device', routerLink: '' },
    { id: 4, title: 'Add a phone-line', routerLink: '' },
    { id: 5, title: 'Upgrade', routerLink: '' }
  ];

  constructor() { }

  ngOnInit(): void {}

  left(): void {
    this.newlastElement = this.cardItems.shift();
    this.cardItems.push(this.newlastElement);
  }

  right(): void{
    console.log('this.cardItems.length - 1: ' + (this.cardItems.length - 1));
    this.newfirsttElement = this.cardItems[(this.cardItems.length - 1)];
    console.log('newfirsttElement: ' + this.newfirsttElement);
    this.cardItems.pop();
    this.cardItems.unshift(this.newfirsttElement);
  }
}
