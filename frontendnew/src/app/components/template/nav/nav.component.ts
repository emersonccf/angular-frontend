import { Component, OnInit, ViewChild } from '@angular/core';
import { NavService } from './nav.service'
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {

  // captura automaticamente a referencia do componente mat-sidenav e passa para a variável
  @ViewChild(MatSidenav)
  private _matSidenav!: MatSidenav

  constructor(private navService: NavService) {
  }
  ngOnInit(): void { }

  // passa a referência do elemento para a variável compartilhada no service após carregar a visualização dele
  ngAfterViewInit(): void {
    this.navService.matSidenav = this._matSidenav
  }
}
