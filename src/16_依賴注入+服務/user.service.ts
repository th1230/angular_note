import { Injectable } from '@angular/core';
import { user } from './userType';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  UserData: user = {
    name: 'thomas',
    age: 22,
    job: '前端工程師',
  };

  login(name: string, age: number, job: string) {
    let flag = false;
    if (
      this.UserData['name'] == name &&
      this.UserData['age'] == age &&
      this.UserData['job'] == job
    ) {
      flag = true;
    }

    return flag ? '登入成功' : '輸入錯誤';
  }

  getUserName() {
    alert(this.UserData.name);
  }

  getUserAge() {
    alert(this.UserData.age);
  }

  getUserJob() {
    alert(this.UserData.job);
  }
}
