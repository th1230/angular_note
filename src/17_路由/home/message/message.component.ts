import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
  dataArr = [
    {
      id: '001',
      title: '訊息第一條',
      content: 'xxx111',
    },
    {
      id: '002',
      title: '訊息第二條',
      content: 'xxx222',
    },
    {
      id: '003',
      title: '訊息第三條',
      content: 'xxx333',
    },
  ];
  params: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe((data) => {
      this.params = data['id'];
    });
  }

  ngOnInit(): void {}

  goBackToHome() {
    // this.router.navigate(['/', 'home']);
    this.router.navigate(['/home']).then(() => {
      console.log('成功返回home');
    });
  }
}
