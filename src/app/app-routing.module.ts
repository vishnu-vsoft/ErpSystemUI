import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadRegisterComponent } from './Component/lead-register/lead-register.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { FetchLeadListComponent } from './Component/fetch-lead-list/fetch-lead-list.component';
import { ViewLeadComponent } from './Component/view-lead/view-lead.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'leadRegister',component:LeadRegisterComponent},
  {path:'fetchLeadList',component:FetchLeadListComponent},
  { path: 'leadDetails/:id', component: ViewLeadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
