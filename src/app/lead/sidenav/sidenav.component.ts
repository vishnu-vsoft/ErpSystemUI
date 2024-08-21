import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { navbarData, NavItem } from './nav-data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent {
  isSidebarMinimized: boolean = false;
  navData: NavItem[] = navbarData;

  ngOnInit() {
    
  }
  
}
