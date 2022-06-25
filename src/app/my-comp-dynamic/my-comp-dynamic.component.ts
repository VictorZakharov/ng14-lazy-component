import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-comp-dynamic',
  templateUrl: './my-comp-dynamic.component.html',
  styleUrls: ['./my-comp-dynamic.component.scss']
})
export class MyCompDynamicComponent implements OnInit {
  testVariable: string = '';

  @Input() template!: TemplateRef<any>;

  ngOnInit(): void {
    // proves that lifecycle hooks are triggered
    this.testVariable = 'test value from ngOnInit';
  }
}
