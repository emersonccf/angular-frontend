import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'actions']

  constructor(
    private productService: ProductService,
    private headerService: HeaderService) {
    headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "store",
      routeUrl: "products"
    }

  }

  ngOnInit(): void {
    this.productService.readProducts().subscribe(
      products => this.products = products
    )
  }

}

