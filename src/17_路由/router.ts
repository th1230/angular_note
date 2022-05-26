import { Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LeaveGuard } from './auth/leave.guard';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MessageComponent } from './home/message/message.component';
import { NewsComponent } from './home/news/news.component';

export const myRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'message/:id',
            component: MessageComponent,
          },
          {
            path: 'news',
            component: NewsComponent,
            canDeactivate: [LeaveGuard],
          },
        ],
      },
    ],
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'feature',
    loadChildren: () =>
      import('./other.module').then((module) => module.OtherModule),
  },
  {
    // 空路徑表示該應用的預設路徑，當 URL 中的路徑為空時通常要去的地方，剛開啟頁面時沒有路徑，會根據此導向對應的路徑
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    // 當所有路由都不匹配時，導向此路由
    path: '**',
    component: PageNotFoundComponent,
  },
];
