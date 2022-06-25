import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCompLazyComponent } from './my-comp-lazy/my-comp-lazy.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCompLazyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
