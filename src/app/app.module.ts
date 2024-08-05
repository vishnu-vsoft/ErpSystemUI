import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadRegisterComponent } from './Component/lead-register/lead-register.component';
import { SignInComponent } from './Component/sign-in/sign-in.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadRegisterComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
