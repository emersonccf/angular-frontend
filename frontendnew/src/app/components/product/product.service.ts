import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _snackBar: MatSnackBar) { }

  showMessage(msg: string, panelClass: string[] = ['']): void {
    this._snackBar.open(msg, 'X', {
      duration: 3600,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: panelClass,
    }
    )
  }

}
