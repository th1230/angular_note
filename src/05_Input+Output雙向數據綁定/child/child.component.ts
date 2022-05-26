import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  //  宣告一個用來接取數據的變量，並用Input裝飾器包裝
  @Input() message: string = '';
  @Output() changeMessage = new EventEmitter<string>();
  currentMes = this.message;
  ngOnInit() {}

  changeMes(event: any) {
    this.changeMessage.emit(event.target.value);
  }
}
