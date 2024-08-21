import { Component } from '@angular/core';
import { NavItem,navbarData } from './nav-data';


@Component({
  selector: 'app-nav-top-side',
  templateUrl: './nav-top-side.component.html',
  styleUrls: ['./nav-top-side.component.css']
})
export class NavTopSideComponent {
  isSidebarMinimized: boolean = false;
  navData: NavItem[] = navbarData;

}
