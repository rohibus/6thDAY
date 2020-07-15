import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {path:'product',component:ProductComponent},
  {path: 'view',component:ViewComponent},
  {path:'',redirectTo:'product',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
