import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeadRegisterComponent } from './lead-register/lead-register.component';
import { FetchLeadListComponent } from './fetch-lead-list/fetch-lead-list.component';
import { ViewLeadComponent } from '../Component/view-lead/view-lead.component';
import { SignInComponent } from '../Component/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent,
     children:[
       { path: 'leadRegistration', component: LeadRegisterComponent },
       { path: 'fetchLeadList', component: FetchLeadListComponent },
       { path: 'leadDetails/:id', component: ViewLeadComponent },
     ],
   },
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
