import { Component } from '@angular/core';
import { navbarData, NavItem } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  collapse:boolean= true;
  navData : NavItem[] = navbarData;

  toggleCollapse(){
    this.collapse = !this.collapse;
  }

}
