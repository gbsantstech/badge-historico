import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeHistoryComponent } from './components/badge-history/badge-history.component';


@NgModule({
  declarations: [
    AppComponent,
    BadgeHistoryComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
