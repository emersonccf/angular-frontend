import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/components/product/product.model';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  products: ProductModel[] = [
    {
      id: 1,
      name: "Lápis de madeira",
      price: 5.99
    },
    {
      id: 2,
      name: "Caderno de espiral 10 matérias",
      price: 20.98
    }
  ]
  displayedColumns = ['id', 'name', 'price', 'actions']
  dataSource = this.products

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "store",
      routeUrl: "products"
    }

  }

  ngOnInit(): void {
  }

}
