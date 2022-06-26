import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCompComponent {
  @Input() template!: TemplateRef<any>;

  // test
}
