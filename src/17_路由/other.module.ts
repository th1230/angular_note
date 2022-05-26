import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  {
    // 當使用延遲引入模塊時要將path改成空，因為要再根routes中配置feature，最後在導航時此子路由模塊的根路由就是在routes延遲引入時配置的路由
    // path: 'feature',
    path: '',
    component: FeatureComponent,
  },
];

@NgModule({
  declarations: [FeatureComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherModule {}
