import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HostComponent } from './core/layout/host/host.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { HomeComponent } from './core/components/home/home.component';
import { AppRoutingModule } from './app.routing';
import { SwiperModule } from 'swiper/angular';
import { CarouselComponent } from './core/components/carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HostComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
