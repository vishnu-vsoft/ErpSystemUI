import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpClientModule } from '@angular/common/http';
import { Lead } from '../Model/lead';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeadServiceService {

  baseUrl = "https://localhost:44302/api/"
  constructor(private http : HttpClient) { }

  registerLead(lead : Lead){
    return this.http.post(this.baseUrl + "Lead/RegisterLead",lead,{
      responseType:'json'
    });
  }

  fetchLead()  :Observable<Lead[]>{
    return this.http.get<Lead[]>(this.baseUrl + "FetchLead/GetLeadList")
  }

  fetchSingleLead(id:string) : Observable<Lead[]>{
    return this.http.get<Lead[]>(this.baseUrl + `FetchLead/${id}`)
  }
}
