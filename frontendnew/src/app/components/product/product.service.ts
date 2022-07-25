import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs'
import { map, catchError } from 'rxjs/operators'
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
    return this.httpClient.post<Product>(this.baseUrl, product).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }

  readProducts(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }

  readByIdProduct(id: Number): Observable<Product> {
    const url = `${this.baseUrl}/${id}`
    return this.httpClient.get<Product>(url).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpClient.put<Product>(url, product).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }

  deleteProduct(product: Product): Observable<Product> {
    const url = `${this.baseUrl}/${product.id}`
    return this.httpClient.delete<Product>(url).pipe(
      map(obj => obj),
      catchError(error => this.handleError(error))
    )
  }

  // Source: https://www.positronx.io/angular-error-handling-tutorial-with-examples/
  handleError(error: any): Observable<any> {
    let errorMessage = ''
    if (error.error instanceof ErrorEvent) { //clint-side error
      errorMessage = `Erro clint-side: ${error.error.message}`
    } else { // server-side error
      errorMessage = `Erro server-side: ${error.status} --> Message: ${error.message}`
    }
    this.showMessage(errorMessage, ['danger', 'font-white'])
    return EMPTY
  }
}
