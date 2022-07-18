import { Component, OnInit, ViewChild } from '@angular/core';
import { HeaderService } from '../header/header.service'
import { NavService } from './nav.service'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  opened = true
  //captura automaticamente a referencia do componente mat-sidenav e passa para a variável
  @ViewChild(MatSidenav)
  private _matSidenav!: MatSidenav
  //new
  @ViewChild(MatSidenav)
  matSidenav!: MatSidenav

  constructor(private headerService: HeaderService,
    private navService: NavService) {
  }
  ngOnInit(): void { }

  //resolvido com: https://stackoverflow.com/questions/48073057/open-close-sidenav-from-another-component
  ngAfterViewInit(): void {
    this.headerService.headerDataSidenav.matSidenav = this._matSidenav
    this.navService.matSidenav = this.matSidenav
  }

  click() {
    this._matSidenav.toggle()
  }
}
