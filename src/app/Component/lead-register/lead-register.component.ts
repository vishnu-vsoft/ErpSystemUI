import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  isRemarksVisible: boolean = false;
  lead!:Lead;
  year!:number;
  submitted:boolean = false;
  successmsg : boolean = false;
  error :string | null = null;
  selectedLead:Lead | null = null;

  constructor(private fb: FormBuilder,
    private route:Router,
    private leadRegisterServ : LeadServiceService) {}

  ngOnInit(): void {
    this.leadRegisterForm = this.fb.group({
      leadName: ['', Validators.required,],
      leadMobileNo: ['', [Validators.pattern(/^\d{10}$/), Validators.required]],
      location: ['', Validators.required],
      leadAddress: [''],
      leadEmail: ['', [Validators.email]],
      highLevelRequirement: ['', Validators.required],
      leadStatus: ['', Validators.required],
      leadFeasibility: ['', Validators.required],
      remarks: ['']
    });

    this.leadRegisterForm.get('leadStatus')?.valueChanges.subscribe(status => {
      this.isRemarksVisible = status === 'ClosedLost';
      if (!this.isRemarksVisible) {
        this.leadRegisterForm.get('remarks')?.setValue(''); 
      }
    });
  }

  onSubmit(): void {
    this.year = new Date().getFullYear();
    if (this.leadRegisterForm.valid) {
      this.lead = { ...this.leadRegisterForm.value };
      this.leadRegisterServ.registerLead(this.lead).subscribe((resp:any) => {
        console.log("Successful", resp);
        alert("Registered Successfully");
        setTimeout(() => {
          this.route.navigate(['']);
        }, 3000); 
      });
      console.log(this.leadRegisterForm.value);
    } else {
      alert("Registration not complete");
    }
  }
  
  
}
