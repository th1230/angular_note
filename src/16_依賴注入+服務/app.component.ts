import { Component } from '@angular/core';
import { UserService } from './user.service';
import { user } from './userType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  data: user = {
    name: 'thomas',
    age: 22,
    job: '前端工程師',
  };
  constructor(public us: UserService) {}

  sendLoginRequest() {
    const { name, age, job } = this.data;
    alert(this.us.login(name, age, job));
  }
}
