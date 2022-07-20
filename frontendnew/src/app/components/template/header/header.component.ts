import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service'
import { HeaderService } from './header.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavService, private headerService: HeaderService) {
  }
  ngOnInit(): void { }

  toggleMatSideNav(): void {
    this.navService.matSidenav.toggle()
  }

  get title(): string {
    return this.headerService.headerData.title
  }

  get icon(): string {
    return this.headerService.headerData.icon
  }

  get routeUrl(): string {
    return this.headerService.headerData.routeUrl
  }

}
