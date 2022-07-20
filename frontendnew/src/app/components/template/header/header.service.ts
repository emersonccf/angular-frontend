import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerData = new BehaviorSubject<HeaderData>( //porteiro - o observador
    {
      title: "Início",
      icon: "home",
      routeUrl: ""
    }
  )

  constructor() { }

  get headerData() {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData) {
    this._headerData.next(headerData)
  }

}
