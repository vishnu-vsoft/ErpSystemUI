import { Component, inject } from '@angular/core';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ErpSystemUI';
  router:string | null = null;
  showSidenav : boolean = false;
  
  location = inject(Location)
    back(){
      this.location.back()
    }

    forward(){
      this.location.forward()
      }
      


  constructor(private route:Router){  }
  
  navigateTest(){
    this.route.navigate(['/test-window'])
  }

  ngOnInit(){
    
  }
  


  
}
