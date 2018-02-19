import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';


import { ClicklistComponent } from './components/clicklist/clicklist.component';
import {RouterModule, Routes} from '@angular/router';


import {GlobalService} from './services/global.service';
import {ListService} from "./services/list.service";

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },


  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'clicklist',
    component: ClicklistComponent
  }

];




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClicklistComponent,
    ClicklistComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GlobalService, ListService],

  bootstrap: [AppComponent]
})
export class AppModule { }
