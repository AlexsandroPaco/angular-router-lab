import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'
import { HelloComponent } from './hello.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RotaComParametroComponent } from './rota-com-parametro/rota-com-parametro.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule 
    ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    FirstComponent, 
    SecondComponent, PageNotFoundComponent, RotaComParametroComponent 
    ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
