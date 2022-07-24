import { Component, Inject, OnInit } from '@angular/core'
import { ProductService } from '../product.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { Product } from '../product.model'

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ProductDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public product: Product, //estudar isto
    private productService: ProductService,
  ) { }

  ngOnInit(): void {
  }

  deleteProduct(): void {
    this.productService.deleteProduct(this.product).subscribe(
      () => {
        this.productService.showMessage(
          `Produto foi excluído com sucesso.`, ['success', 'font-white'])
        this.productService.productReadComponent.ngOnInit() // reload component after delete
        this.dialogRef.close()
      })
  }

}
