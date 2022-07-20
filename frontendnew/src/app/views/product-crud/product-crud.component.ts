import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {


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
