import { ChildComponent } from './child/child.component';
import { Component, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(ChildComponent) child!: ChildComponent;

  ngAfterViewInit() {
    console.log(this.child);
  }
}
