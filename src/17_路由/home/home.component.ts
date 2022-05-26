import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectNews: number = 1;

  constructor(private route: ActivatedRoute, private router: Router) {
    console.log(this.route);
    console.log(this.router);
  }

  ngOnInit(): void {}
}
