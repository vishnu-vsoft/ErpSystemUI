import { Component } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lead } from 'src/app/Model/lead';
import { LeadServiceService } from 'src/app/Service/lead-service.service';


@Component({
  selector: 'app-lead-register',
  templateUrl: './lead-register.component.html',
  styleUrls: ['./lead-register.component.css']
})
export class LeadRegisterComponent {
  leadRegisterForm!: FormGroup;
  
  lead!:Lead;
  year!:number;
  submitted:boolean = false;
  successmsg : boolean = false;
  error :string | null = null;
  selectedLead:Lead | null = null;
  isSidebarClosed  = false;
  minLength : boolean = true;

  constructor(private fb: FormBuilder,
    private route:Router,
    private leadRegisterServ : LeadServiceService) {}

  ngOnInit(): void {
    this.leadRegisterForm = this.fb.group({
      leadName: ['', [Validators.required,Validators.minLength(5)],],
      leadMobileNo: ['', [Validators.pattern(/^\d{10}$/), Validators.required]],
      location: ['', Validators.required],
      leadAddress: [''],
      leadEmail: ['', [Validators.email]],
      highLevelRequirement: ['', Validators.required],
      // leadStatus: ['', Validators.required],
      leadFeasibility: ['Feasible', Validators.required],
      remarks: ['',Validators.required]
    });
    if (this.minLength) {
      this.leadRegisterForm.get('leadName')?.setValidators([
        Validators.required,
        Validators.minLength(5),
        
      ]);
    }

    
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  

  onSubmit(): void {
    this.submitted = true;
    this.year = new Date().getFullYear();
    if (this.leadRegisterForm.valid) {
      this.lead = { ...this.leadRegisterForm.value,
            LeadStatus : "Closed Won"
       };
      this.leadRegisterServ.registerLead(this.lead).subscribe((resp:any) => {
        console.log("Successful", resp);
        // alert("Registered Successfully");
        setTimeout(() => {
          this.route.navigate(['']);
        }, 3000); 
      });
      console.log(this.leadRegisterForm.value);
    } else {
      alert("Registration not complete");
    }
  }

  closeLost(){
    if(this.leadRegisterForm.valid){
      this.lead = {...this.leadRegisterForm.value,
        LeadStatus : "Closed Lost"
      };
      this.leadRegisterServ.registerLead(this.lead).subscribe((respo:any) =>{
        console.log("lead closed lost successfull",respo);
        setTimeout(()=>{
          this.route.navigate(['']);
        },3000)
      });
      
      }else{
        console.log("not successful");
    }
  }
}
