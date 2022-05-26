import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private ElementRef: ElementRef
  ) {
    console.log(this.viewContainer);
    console.log(this.ElementRef);
    console.log(this.templateRef);
  }

  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
