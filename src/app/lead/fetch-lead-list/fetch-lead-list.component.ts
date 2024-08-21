import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Lead } from 'src/app/Model/lead';
import { LeadServiceService } from 'src/app/Service/lead-service.service';

@Component({
  selector: 'app-fetch-lead-list',
  templateUrl: './fetch-lead-list.component.html',
  styleUrls: ['./fetch-lead-list.component.css']
})
export class FetchLeadListComponent {
  leadFetch:Lead[] = [];
  fetchLeadData: boolean = false;
  selectedLead!:Lead;
  
  leadRegisterForm! : FormGroup;
  year? : number;

  constructor(
    private fb : FormBuilder,
    private leadService:LeadServiceService,
    private route:Router
  ){
    this.leadRegisterForm = this.fb.group({
      LeadName: [''],
      LeadMobileNo: [''],
      Location: [''],
      LeadAddress: [''],
      LeadEmail: [''],
      HighLevelRequirement: [''],
      LeadStatus: [''],
      LeadFeasibility: [''],
      Remarks: ['']
    });
  }

  ngOnInit(){
    this.year = new Date().getFullYear();
    this.fetchLeadList(); 
    
  }

  fetchLeadList(): void {
    this.leadService.fetchLead().subscribe(
      (resp: Lead[]) => {
        this.leadFetch = resp;
        this.fetchLeadData = true;
      },
      (error) => {
        console.error('Error fetching leads', error);
        this.fetchLeadData = false;
      }
    );
  }
  
  selectLead(lead: any): void {
    console.log('Lead clicked:', lead);
    this.selectedLead = lead;
    this.leadRegisterForm.patchValue({
      LeadName: lead.LeadName,
      LeadMobileNo: lead.LeadMobileNo,
      Location: lead.Location,
      LeadAddress: lead.LeadAddress,
      LeadEmail: lead.LeadEmail,
      HighLevelRequirement: lead.HighLevelRequirement,
      LeadStatus: lead.LeadStatus,
      LeadFeasibility: lead.LeadFeasibility,
      Remarks: lead.Remarks
    });
}



navigate(lead :Lead){
  this.selectedLead = lead;
  console.log('Selected Lead Data:', this.selectedLead);
  this.route.navigate(['/viewLead',this.selectedLead.Id])
}

}
