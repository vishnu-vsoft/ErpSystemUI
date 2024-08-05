import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Lead } from '../Model/lead';
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
}
