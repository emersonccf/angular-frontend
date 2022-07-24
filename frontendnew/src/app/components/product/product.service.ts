import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs'
import { ProductReadComponent } from './product-read/product-read.component'
import { Product } from './product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:3001/products'

  // for reload component after delete, sharing reference between components
  private _productReadComponent: ProductReadComponent

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient) { }

  showMessage(msg: string, panelClass: string[] = ['']): void {
    this.snackBar.open(msg, 'X', {
      duration: 3600,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: panelClass,
    })
  }

  get productReadComponent(): ProductReadComponent {
    return this._productReadComponent
  }

  set productReadComponent(productReadComponent: ProductReadComponent) {
    this._productReadComponent = productReadComponent
  }
  createProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product)
  }

  readProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl)
  }

  readByIdProduct(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Product>(url)
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpClient.put<Product>(url, product)
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpClient.delete<Product>(url)
  }

}
