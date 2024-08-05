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
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
    this.year = new Date().getFullYear();
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  /**
   * On submit form
   */

  clickable():void{
    
    this.router.navigate(['/leadRegister']);
  }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid

    const email = this.f['email'].value;
    const name = this.f['username'].value;
    const password = this.f['password'].value;

    
    
  }
  


}
