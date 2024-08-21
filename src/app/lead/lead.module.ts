import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLeadComponent } from '../Component/view-lead/view-lead.component';
import { FetchLeadListComponent } from './fetch-lead-list/fetch-lead-list.component';
import { LeadRegisterComponent } from './lead-register/lead-register.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeadRoutingModule } from './lead-routing.module';
import { SignInComponent } from '../Component/sign-in/sign-in.component';
import { ViewOnlyLeadComponent } from './view-only-lead/view-only-lead.component';
import { NavTopSideComponent } from './nav-top-side/nav-top-side.component';


@NgModule({
  declarations: [
    
    LeadRegisterComponent,
    FetchLeadListComponent,
    ViewLeadComponent,
    SidenavComponent,
    TopbarComponent,
    SignInComponent,
    ViewOnlyLeadComponent,
    NavTopSideComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    LeadRoutingModule,
  ],
  
})
export class LeadModule { }
