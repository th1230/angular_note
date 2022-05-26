import {
  Component,
  OnChanges,
  OnInit,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() mes: string = '';

  constructor() {
    console.log('child constructor');
  }

  ngOnChanges() {
    console.log('child OnChange');
  }

  ngOnInit() {
    console.log('child OnInit');
  }

  ngDoCheck() {
    console.log('child DoCheck');
  }

  ngAfterContentInit() {
    console.log('child AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('child AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('child AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('child AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('child OnDestroy');
  }
}
