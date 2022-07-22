import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/components/product/product.model';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
