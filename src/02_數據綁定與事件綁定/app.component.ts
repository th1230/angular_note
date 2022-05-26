import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imgSrc =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  bindString = 'text text-shadow text-indent';
  bindObj = {
    text: true,
    'text-shadow': false,
    'text-indent': true,
  };
  bindArr = ['text', 'text-shadow', 'text-indent'];

  bgc = 'yellow';
  width = 100;

  styleBindString =
    'width: 100px; height: 100px;background-color:rgb(65, 223, 160)';

  styleBindObj = {
    height: '100px',
    width: '100px',
    backgroundColor: 'rgb(65, 223, 160)',
  };

  sayhi() {
    alert('hi 你好啊!!!');
  }

  outputEvent(e: Event) {
    console.log('我是觸發事件的event target', e.target);
  }
}
