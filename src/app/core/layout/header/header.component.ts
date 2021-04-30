import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navItems = [
    { id: 1, title: 'Store', routerLink: '' },
    { id: 2, title: 'Products & Services', routerLink: '' },
    { id: 3, title: 'Help & Support', routerLink: '' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
