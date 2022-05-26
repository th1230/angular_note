import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { NewsComponent } from '../home/news/news.component';

@Injectable({
  providedIn: 'root',
})
export class LeaveGuard implements CanDeactivate<NewsComponent> {
  canDeactivate(
    component: NewsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return confirm('是否要離開此news?');
  }
}
