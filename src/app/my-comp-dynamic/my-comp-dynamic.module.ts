import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCompDynamicComponent } from './my-comp-dynamic.component';

@NgModule({
  declarations: [
    MyCompDynamicComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MyCompDynamicComponent
  ]
})
export class MyCompDynamicModule { }
