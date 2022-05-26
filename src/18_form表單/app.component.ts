import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  userEmail = 'thomasxxx@gmail.com';
  userPassword = 'xxx123';
  myEmail = '';
  myPassword = '';

  form!: FormGroup;

  constructor(public formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    // console.log(this.form);
    return this.form.controls;
  }
}
