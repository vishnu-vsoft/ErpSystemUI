import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadComponent } from './lead/lead.component';
import { LeadRegisterComponent } from './lead-register/lead-register.component';
import { FetchLeadListComponent } from './fetch-lead-list/fetch-lead-list.component';
import { ViewLeadComponent } from '../Component/view-lead/view-lead.component';

// const routes: Routes = [
//   { path: '', component: LeadComponent },
//   { path: 'leadRegister', component: LeadRegisterComponent },
//   { path: 'fetchLeadList', component: FetchLeadListComponent },
//   { path: 'leadDetails/:id', component: ViewLeadComponent }
// ];

@NgModule({
//   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
