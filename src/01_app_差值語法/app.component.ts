import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  persondata = {
    name: 'thomas',
    age: 22,
    job: '前端工程師',
    subject: 'angular',
  };

  mytext = '我插入了一個值';

  sayhi() {
    return 'hi 你好阿';
  }
}
