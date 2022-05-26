import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  dataArr = [
    {
      id: '001',
      title: '新聞第一條',
      content: 'yyy111',
    },
    {
      id: '002',
      title: '新聞第二條',
      content: 'yyy222',
    },
    {
      id: '003',
      title: '新聞第三條',
      content: 'yyy333',
    },
  ];

  queryParams: string = '';

  constructor(private route: ActivatedRoute) {
    console.log(
      this.route.queryParams.subscribe((data) => {
        this.queryParams = data['id'];
      })
    );
  }

  ngOnInit(): void {}
}
