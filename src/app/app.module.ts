import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadRegisterComponent } from './Component/lead-register/lead-register.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchLeadListComponent } from './Component/fetch-lead-list/fetch-lead-list.component';
import { LeadServiceService } from './Service/lead-service.service';
import { ViewLeadComponent } from './Component/view-lead/view-lead.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidenavComponent } from './Component/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadRegisterComponent,
    SignInComponent,
    SignUpComponent,
    FetchLeadListComponent,
    ViewLeadComponent,
    SidenavComponent,
   
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
