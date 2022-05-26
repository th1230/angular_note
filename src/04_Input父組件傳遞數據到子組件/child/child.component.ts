import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  //  宣告一個用來接取數據的變量，並用Input裝飾器包裝
  @Input() message: string = '';
  ngOnInit() {}
}
