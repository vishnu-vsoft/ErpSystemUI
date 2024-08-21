import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';
import { LeadServiceService } from './Service/lead-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { TestingWindowComponent } from './lead/testing-window/testing-window.component';



@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    TestingWindowComponent,
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
