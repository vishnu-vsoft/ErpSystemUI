import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { LeadModule } from './lead/lead.module';
import { LeadRegisterComponent } from './lead/lead-register/lead-register.component';
import { FetchLeadListComponent } from './lead/fetch-lead-list/fetch-lead-list.component';
import { ViewLeadComponent } from './Component/view-lead/view-lead.component';
import { ViewOnlyLeadComponent } from './lead/view-only-lead/view-only-lead.component';
import { NavTopSideComponent } from './lead/nav-top-side/nav-top-side.component';

const routes: Routes = [
    //{ path: '', loadChildren: () => import('./lead/lead.module').then(m => m.LeadModule) }
  { path:'', component: SignInComponent },
  { path:'leadRegister',component:LeadRegisterComponent },
  { path:'fetchLeadList',component:FetchLeadListComponent },
  { path: 'leadDetails/:id', component: ViewLeadComponent },
  { path:'viewLead/:id',component:ViewOnlyLeadComponent },
  { path:'test-window',component:NavTopSideComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
