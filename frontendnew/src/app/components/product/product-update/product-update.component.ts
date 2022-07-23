import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { HeaderService } from '../../template/header/header.service'
import { Product } from '../product.model'
import { ProductService } from '../product.service'

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    id: null,
    name: '',
    price: null
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'edit_note',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
    const id: Number = Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.productService.readByIdProduct(id).subscribe(
      product => {
        this.product = product
      })
  }

  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe(
      product => {
        this.productService.showMessage(`Produto Id ${product.id} atualizado com sucesso`, ['success', 'font-white'])
        this.router.navigate(['/products'])
      }
    )
  }

}
