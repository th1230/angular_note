import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  TemplateRef,
  ViewContainerRef,
  ViewChildren,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  //  只有一個同名的檢視

  // @ViewChild('h1', { read: ElementRef }) h1!: ElementRef;
  // @ViewChild('h1', { read: TemplateRef }) h1!: TemplateRef<any>;
  // @ViewChild('h1', { read: ViewContainerRef }) h1!: ViewContainerRef;

  // @ViewChild('temp', { read: ElementRef }) temp!: ElementRef;
  // @ViewChild('temp', { read: TemplateRef }) temp!: TemplateRef<any>;
  // @ViewChild('temp', { read: ViewContainerRef }) temp!: ViewContainerRef;

  // @ViewChild('ct', { read: ElementRef }) ct!: ElementRef;
  // @ViewChild('ct', { read: TemplateRef }) ct!: TemplateRef<any>;
  // @ViewChild('ct', { read: ViewContainerRef }) ct!: ViewContainerRef;

  //  多個同名的檢視

  // @ViewChildren('h1', { read: ElementRef }) h1!: QueryList<ElementRef>;
  // @ViewChildren('h1', { read: TemplateRef }) h1!: QueryList<TemplateRef<any>>;
  // @ViewChildren('h1', { read: ViewContainerRef }) h1!: QueryList<ViewContainerRef>;

  // @ViewChildren('temp', { read: ElementRef }) temp!: QueryList<ElementRef>;
  // @ViewChildren('temp', { read: TemplateRef }) temp!: QueryList<TemplateRef<any>>;
  // @ViewChildren('temp', { read: ViewContainerRef }) temp!: QueryList<ViewContainerRef>;

  // @ViewChildren('ct', { read: ElementRef }) ct!: QueryList<ElementRef>;
  // @ViewChildren('ct', { read: TemplateRef }) ct!: QueryList<TemplateRef<any>>;
  // @ViewChildren('ct', { read: ViewContainerRef }) ct!: QueryList<ViewContainerRef>;

  ngAfterViewInit() {
    // console.log(this.h1);
    // console.log(this.temp);
    // console.log(this.ct);
  }
}
