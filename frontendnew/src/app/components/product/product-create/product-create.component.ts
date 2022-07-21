import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      title: "Cadastro de Produtos",
      icon: "edit",
      routeUrl: "/products"
    }
  }

  ngOnInit(): void {
  }

}
