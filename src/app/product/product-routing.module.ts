import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  { path: '', component: AllProductsComponent },
  { path: 'viewProduct/:id', component: ViewProductComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: 'deleteProduct/:id', component: DeleteProductComponent },
  { path: 'updateProduct/:id', component: UpdateProductComponent }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
