import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs'
import { ProductModel } from './product.model'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products'

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

  createProduct(product: ProductModel): Observable<ProductModel> {
    return this.httpClient.post<ProductModel>(this.baseUrl, product)
  }

  readProducts(): Observable<ProductModel[]> {
    return this.httpClient.get<ProductModel[]>(this.baseUrl)
  }

}
