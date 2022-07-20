import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const appName: string = "MyCRUD" // poderia colocar esta constante em um service para utilizar em toda a aplicação

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: appName + " | " + "Home",
  },
  {
    path: "products",
    component: ProductCrudComponent,
    title: appName + " | " + "Produtos",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
