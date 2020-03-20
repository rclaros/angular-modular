import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewMainComponent } from './views/view-main/view-main.component';


const routes: Routes = [{path:'',component:ViewMainComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
