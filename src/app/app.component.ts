import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ErpSystemUI';
  router:string | null = null;
  showSidenav : boolean = false;

  constructor(private route:Router){}
  ngOnInit(){
    this.findRoute();
  }
  findRoute(){
    this.router = this.route.url;
    if(this.router == ''){
      this.showSidenav =false;
    }else{
      this.showSidenav = true;
    }
  }


  
}
