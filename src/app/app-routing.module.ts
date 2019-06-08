import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './list/list.component';
import {ModifyComponent} from './modify/modify.component'
const routes: Routes = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  {
    path:'list',
    component: ListComponent
  },
  {
    path:'add',
    component: ModifyComponent
  },
  {
    path:'update/:id',
    component: ModifyComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
