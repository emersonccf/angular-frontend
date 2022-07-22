import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { ProductModel } from '../product.model';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

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

