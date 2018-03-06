import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YogiComponent } from './yogi/yogi.component';
import { CindyComponent } from './cindy/cindy.component';
import { BoobooComponent } from './booboo/booboo.component';

const routes: Routes = [
  { path: '', redirectTo: 'cindy', pathMatch: 'full' },
  { path: 'cindy', component: CindyComponent },
  { path: 'boo-boo', component: BoobooComponent },
  { path: 'yogi', component: YogiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
