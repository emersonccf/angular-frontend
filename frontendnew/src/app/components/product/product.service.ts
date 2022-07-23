import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs'
import { Product } from './product.model'
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

}
