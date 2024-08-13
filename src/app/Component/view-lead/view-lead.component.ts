import { Component } from '@angular/core';
import { LeadServiceService } from 'src/app/Service/lead-service.service';
import { FetchLeadListComponent } from '../../lead/fetch-lead-list/fetch-lead-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lead } from 'src/app/Model/lead';

@Component({
  selector: 'app-view-lead',
  templateUrl: './view-lead.component.html',
  styleUrls: ['./view-lead.component.css']
})
export class ViewLeadComponent {
  leadEditForm! : FormGroup;
  id : string | null = null;
  isRemarksVisible: boolean = false;
  successmsg: string | null = null;
  error: string | null = null;
  year : number |null = null;
  submitted = false;
  lead!:Lead;

  constructor(private service:LeadServiceService,
    private route:ActivatedRoute,
    private fb:FormBuilder,
    private router:Router){
      this.leadEditForm = this.fb.group({
        leadName: ['', Validators.required],  
        leadMobileNo: ['', Validators.required],
        location: ['', Validators.required],
        leadAddress: ['', Validators.required],
        leadEmail: ['', [Validators.required, Validators.email]],
        highLevelRequirement: ['', Validators.required],
        leadStatus: ['Open', Validators.required],
        leadFeasibility: ['', Validators.required],
        remarks: ['']
      });

      this.leadEditForm.get('leadStatus')?.valueChanges.subscribe(status => {
        this.isRemarksVisible = status === 'ClosedLost';
        if (!this.isRemarksVisible) {
          this.leadEditForm.get('remarks')?.setValue(''); 
        }
      });
    }

  ngOnInit(): void{
    this.year = new Date().getFullYear();
    this.route.paramMap.subscribe(
      params =>{
        this.id = params.get('id');
        if(this.id){
          this.fetchSingleLeadDetails(this.id);
        }
    })
  }

  fetchSingleLeadDetails(id : string){
    this.service.fetchSingleLead(id).subscribe(
      (leads:Lead[])=>{
        if(leads.length > 0){
          const lead = leads[0];
          this.leadEditForm.patchValue({
            id:lead.Id || '',
            leadName: lead.LeadName || '',  
            leadMobileNo: lead.LeadMobileNo || '',
            location: lead.Location || '',
            leadAddress: lead.LeadAddress || '',
            leadEmail: lead.LeadEmail || '',
            highLevelRequirement: lead.HighLevelRequirement || '',
            leadStatus: lead.LeadStatus || '',
            leadFeasibility: lead.LeadFeasibility || '',
            remarks: lead.Remarks || ''
          });
          this.isRemarksVisible = true;
          
        }else{
          console.warn('No leads found');
        }
      }
    )
  }


  
  onSubmit(): void {
    this.submitted = true;

    if (this.leadEditForm.valid) {
      this.lead = { ...this.leadEditForm.value, //payload
        Id: this.id
       };
      this.service.registerLead(this.lead).subscribe(
        () => {
          this.successmsg = 'Lead updated successfully';
          setTimeout(() => {
            this.router.navigate(['/']); 
          }, 2000);
        },
        (error) => {
          console.error('Error updating lead:', error);
          this.error = 'Failed to update lead';
        }
      );
    }
  }

}
