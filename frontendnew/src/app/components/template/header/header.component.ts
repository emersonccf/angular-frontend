import { Component, OnInit } from '@angular/core';
import { NavService } from '../nav/nav.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private navService: NavService) {
  }
  ngOnInit(): void { }

  toggleMatSideNav(): void {
    this.navService.matSidenav.toggle()
  }
}
