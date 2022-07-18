import { Component, OnInit } from '@angular/core';
import { HeaderService } from './header.service'
import { NavService } from '../nav/nav.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private headerService: HeaderService,
    private navService: NavService) {
  }
  ngOnInit(): void { }

  toggleSideNav(): void {
    this.headerService.headerDataSidenav.matSidenav.toggle()
  }

  toggleMatSideNav(): void {
    this.navService.matSidenav.toggle()
  }
}
