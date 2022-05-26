import { Component, ContentChild, AfterContentInit } from '@angular/core';
import { ChildRefDirective } from '../child-ref.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements AfterContentInit {
  @ContentChild(ChildRefDirective) content!: ChildRefDirective;
  ngAfterContentInit() {
    console.log(this.content);
  }
}
