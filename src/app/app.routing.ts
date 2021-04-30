import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { HostComponent } from './core/layout/host/host.component';

const routes: Routes = [
  {
    path: '',
    component: HostComponent,
    children: [
      { path: '', component: HomeComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
