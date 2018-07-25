import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductNewComponent } from './product/product-new/product-new.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductShowComponent } from './product/product-show/product-show.component';

const routes: Routes = [
	{path:'', pathMatch:'full', component: ProductListComponent},
	{path:'products', component: ProductListComponent},
	{path:'products/new', component: ProductNewComponent},
	{path:'products/:id', component: ProductShowComponent},
	{path:'new', pathMatch:'full',component: ProductNewComponent},
	{path:'edit/:id', pathMatch:'full', component: ProductEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }