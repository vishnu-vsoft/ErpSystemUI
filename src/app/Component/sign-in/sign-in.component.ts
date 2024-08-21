import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  signupForm!: FormGroup;
  submitted: any = false;
  error: any = '';
  successmsg: any = false;
  year? : number;
  
 

  // tslint:disable-next-line: max-line-length
  constructor(private formBuilder: FormBuilder,
    private router:Router
    ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: ['', ],
      email: ['', ],
      password: ['', ],
    });
    this.year = new Date().getFullYear();
  }

  get f() { return this.signupForm.controls; }
  clickable():void{
    // alert("clicked");
    this.router.navigate(['fetchLeadList']);
  }

  
  onSubmit() {
    this.submitted = true;

    const email = this.f['email'].value;
    const name = this.f['username'].value;
    const password = this.f['password'].value;

    this.router.navigate(['leadRegister']);

    
    
  }
  


}
