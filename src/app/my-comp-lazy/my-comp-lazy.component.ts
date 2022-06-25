import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, createNgModuleRef,
  Injector,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

// noinspection AngularMissingOrInvalidDeclarationInModule
@Component({
  selector: 'app-my-comp-lazy',
  templateUrl: './my-comp-lazy.component.html',
  styleUrls: ['./my-comp-lazy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCompLazyComponent implements OnInit {
  @ViewChild("lazyComponent", {read: ViewContainerRef})
  lazyComponent!: ViewContainerRef;

  constructor(
    private injector: Injector,
    private ref: ChangeDetectorRef,
  ) { }

  async ngOnInit(): Promise<void> {
    await this.lazyLoad();
  }

  private async lazyLoad() {
    const { MyCompModule } = await import(/* webpackChunkName: "main.my-comp" */ "../my-comp/my-comp.module");
    const { MyCompComponent } = await import(/* webpackChunkName: "main.my-comp" */ "../my-comp/my-comp.component");

    const moduleRef = createNgModuleRef(MyCompModule, this.injector);
    this.lazyComponent.clear();
    this.lazyComponent.createComponent(MyCompComponent, {ngModuleRef: moduleRef});
    this.ref.markForCheck();
  }
}
