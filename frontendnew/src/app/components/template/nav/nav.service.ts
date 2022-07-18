//resolution with: https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component
import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'

@Injectable({
  providedIn: 'root'
})

export class NavService {

  private _matSidenav: MatSidenav

  constructor() { }

  get matSidenav(): MatSidenav {
    return this._matSidenav
  }

  set matSidenav(matSidenav: MatSidenav) {
    this._matSidenav = matSidenav
  }

  open(): any {
    return this._matSidenav.open()
  }

  close(): any {
    return this._matSidenav.close()
  }

  toggle(): void {
    this._matSidenav.toggle()
  }

}
