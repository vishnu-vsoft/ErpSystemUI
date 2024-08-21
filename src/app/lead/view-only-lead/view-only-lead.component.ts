import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lead } from 'src/app/Model/lead';
import { LeadServiceService } from 'src/app/Service/lead-service.service';
import { SidenavComponent } from '../sidenav/sidenav.component';
@Component({
  selector: 'app-view-only-lead',
  templateUrl: './view-only-lead.component.html',
  styleUrls: ['./view-only-lead.component.css']
})
export class ViewOnlyLeadComponent {
  year : number | null = null;
  id : string | null = null;
  lead! : Lead;
  selectedLead!:Lead;

  constructor(private route : ActivatedRoute,
    private router : Router,
    private service : LeadServiceService
  ){}

  ngOnInit(){
    this.year = new Date().getFullYear();
    this.route.paramMap.subscribe(
      params =>{
        this.id = params.get('id');
        if(this.id){
          this.viewOnlyLead(this.id);
        }
      }
    )
  }

  viewOnlyLead(id: string): void {
    this.service.fetchSingleLead(id).subscribe(
      (leads: Lead[]) => {
        if (leads && leads.length > 0) {
          this.lead = leads[0];
          // Additional actions can be performed here if needed
        } else {
          console.error('No lead found with the provided ID');
        }
      },
      (error) => {
        console.error('Error fetching lead', error);
      }
    );
  }

  getRowData(lead:Lead){
    this.selectedLead = lead;
    this.router.navigate(['/leadDetails',this.selectedLead.Id])
  }
}
