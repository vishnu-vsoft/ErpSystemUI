import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ErpSystemUI';
  router:string | null = null;
  showSidenav : boolean = false;

  constructor(){}
  ngOnInit(){
    
  }
  


  
}
