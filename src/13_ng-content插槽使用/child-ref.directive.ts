import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appChildRef]',
})
export class ChildRefDirective {
  constructor(public TemplateRef: TemplateRef<any>) {}
}
