import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  /* 
      1. 先引入EventEmitter 和 Output
      2. 通過EventEmitter 創建一個自定義事件
      3. 使用Output裝飾器包裝sendMsg事件
      4. 自創一個涵式調用emit()，將事件觸發並傳遞數據
  */
  @Output() sendMsg = new EventEmitter<String>();

  btnClick() {
    this.sendMsg.emit('哈瞜你好我是Child組件的數據');
  }
  ngOnInit() {}
}
