import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { LeadServiceService } from './Service/lead-service.service';
import { ViewLeadComponent } from './Component/view-lead/view-lead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TopbarComponent } from './lead/topbar/topbar.component';
import { Router } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule
  ],
  providers: [
    LeadServiceService,
    Router
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
