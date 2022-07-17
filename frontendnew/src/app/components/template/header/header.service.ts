import { Injectable } from '@angular/core';
import { HeaderDataSidenav } from './header-data-sidenav.module';
import { BehaviorSubject } from 'rxjs';
import { BooleanInput } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _opened: BehaviorSubject<BooleanInput> = new BehaviorSubject(true)
  private _headerDataSidenav: BehaviorSubject<HeaderDataSidenav> = new BehaviorSubject({})

  constructor() { }

  get headerDataSidenav(): HeaderDataSidenav {
    return this._headerDataSidenav.value
  }

  set headerDataSidenav(headerDataSidenav: HeaderDataSidenav) {
    this._headerDataSidenav.next(headerDataSidenav)
  }

  get opened(): BooleanInput {
    return this._opened.value
  }

  set opened(def: BooleanInput) {
    console.log('opened:', def)
    this._opened.next(def)
  }

  toggle(): BooleanInput {
    if (this.opened) {
      this.opened = false
      return false
    }
    else {
      this.opened = true
      return true
    }
  }
}
