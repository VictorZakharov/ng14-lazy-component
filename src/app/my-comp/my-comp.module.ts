import { NgModule } from '@angular/core';
import { MyCompComponent } from './my-comp.component';
import { CommonModule } from '@angular/common';
import { MyCompDynamicModule } from '../my-comp-dynamic/my-comp-dynamic.module';

@NgModule({
  declarations: [
    MyCompComponent
  ],
  imports: [
    CommonModule,
    MyCompDynamicModule,
  ],
  exports: [
    MyCompComponent
  ]
})
export class MyCompModule { }
