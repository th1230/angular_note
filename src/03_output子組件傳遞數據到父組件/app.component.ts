import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  catchEvent(msg: String) {
    console.log('我是App組件我得到數據:', msg);
  }
}
