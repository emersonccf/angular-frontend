import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../template/header/header.service';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { MatDialog } from '@angular/material/dialog'
import { ProductDeleteComponent } from '../product-delete/product-delete.component';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'actions']

  private idProductSelected: Number = null

  constructor(
    private matDialog: MatDialog,
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
      products => {
        this.products = products
        this.productService.productReadComponent = this // for reload component after delete
      })
  }

  setIdProductSelected(id: Number) {
    this.idProductSelected = id
  }

  openDialogDeleteProduct(id: Number): void {
    this.setIdProductSelected(id)
    let data: Product = null
    this.productService.readByIdProduct(this.idProductSelected).subscribe(
      product => {
        data = product
        const dialogRef = this.matDialog.open(ProductDeleteComponent,
          {
            data: data,
            disableClose: true,
          })
        dialogRef.afterClosed().subscribe(
          result => {
            // console.log('A caixa de diálogo foi fechada!')
            // console.log(typeof (result), 'Valor->', result)
          })
      }
    )
  }
}

