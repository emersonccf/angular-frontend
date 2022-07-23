import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { HeaderService } from '../../template/header/header.service'
import { ProductModel } from '../product.model'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: ProductModel = {
    name: '',
    price: null
  }

  constructor(
    private headerService: HeaderService,
    private router: Router,
    private productService: ProductService) {
    this.headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'edit',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  createProduct(): void {
    this.productService.createProduct(this.product).subscribe(
      product => {
        // só exibe a mensagem e redirecionar quando recebe a resposta positiva do backend
        this.productService.showMessage(
          `Produto "${product.name} Id => ${product.id}" criado com sucesso!`, ['success', 'font-white'])
        this.router.navigate(['/products'])
      })
  }

}
