import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadComponent } from './lead/lead.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewLeadComponent } from '../Component/view-lead/view-lead.component';
import { FetchLeadListComponent } from './fetch-lead-list/fetch-lead-list.component';
import { LeadRegisterComponent } from './lead-register/lead-register.component';
import { SidenavComponent } from '../Component/sidenav/sidenav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LeadRoutingModule } from './lead-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    LeadComponent,
    LeadRegisterComponent,
    FetchLeadListComponent,
    ViewLeadComponent,
    SidenavComponent,
    TopbarComponent,
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
