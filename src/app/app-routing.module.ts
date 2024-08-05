import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeadRegisterComponent } from './Component/lead-register/lead-register.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';

const routes: Routes = [
  {path:'',component:SignInComponent},
  {path:'leadRegister',component:LeadRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
