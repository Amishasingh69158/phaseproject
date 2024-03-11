import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Appcitizen } from './appcitizen';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppcitizenService {

  constructor(public httpClient:HttpClient) { }
  createAppCitizensAccount(appCitizen:any): Observable<string> {
    return this.httpClient.post("http://localhost:9090/approveCitizens/requestAccount", appCitizen, { responseType: 'text' });
  }
  allAppCitizensInformation():Observable<Appcitizen[]>{
    return this.httpClient.get<Appcitizen[]>("http://localhost:9090/approveCitizens/findAllApprovelrequest");
  }
  searchAppCitizenByEmailiId(emailid:any):Observable<Appcitizen> {
    return this.httpClient.get<Appcitizen>("http://localhost:9090/approveCitizens/searchAppCitizenByEmailId/"+emailid);
  }
  
}
