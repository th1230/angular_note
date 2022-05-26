import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreloadAllModules } from '@angular/router';
import { myRoutes } from './router';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(myRoutes, {
      // 使用的預載入策略為=>全部預先載入
      preloadingStrategy: PreloadAllModules,
      // 開啟hash模式
      // useHash:true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
