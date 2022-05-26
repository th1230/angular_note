import { Component } from '@angular/core';
import { HttpService } from './servers/http.service';
import httpInterface from './servers/httpInterface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  parners!: httpInterface;
  constructor(private hs: HttpService) {}
  getParnerData() {
    this.hs.sendHttp().subscribe((data) => {
      this.parners = data;
    });
  }
}
