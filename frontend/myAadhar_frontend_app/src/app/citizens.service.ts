import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Citizens } from './citizens';
import { Appcitizen } from './appcitizen';
@Injectable({
  providedIn: 'root'
})
export class CitizensService {

  constructor(public httpClient:HttpClient) { } // DI


  searchCitizenByEmailiId(emailid:any):Observable<Citizens> {
    console.log(emailid);

    return this.httpClient.get<Citizens>("http://localhost:9090/citizens/searchCitizenByEmailId/"+emailid);
  }


  allCitizensInformation():Observable<Citizens[]>{
    return this.httpClient.get<Citizens[]>("http://localhost:9090/citizens/findAll");
  }
  findCitizenByStatus():Observable<Citizens[]>{
    return this.httpClient.get<Citizens[]>("http://localhost:9090/citizens/findCitizenByStatus");
  }
  allAppCitizensInformation():Observable<Appcitizen[]>{
    return this.httpClient.get<Appcitizen[]>("http://localhost:9090/approveCitizens/findAllApprovelrequest");
  }
  
  deleteApproveCitizen(aadharNumber:any): Observable<any> {
    console.log("deleted");
    console.log(aadharNumber);
    return this.httpClient.delete("http://localhost:9090/approveCitizens/deleteAppCitizen/"+aadharNumber);
  }
  deleteCitizen(aadharNumber:any): Observable<any> {
    console.log("deleted");
    console.log(aadharNumber);
    return this.httpClient.delete("http://localhost:9090/citizens/deleteCitizen/"+aadharNumber);
  }
  createCitizensAccount(ctizen:any): Observable<string> {
    return this.httpClient.post("http://localhost:9090/citizens/createAccount", ctizen, { responseType: 'text' });
  }

  updateCitizenDetails(ctizen:any): Observable<string> {
    console.log("updated");
    console.log(ctizen);

    return this.httpClient.put("http://localhost:9090/citizens/updateAccount",ctizen, { responseType: 'text' });
  }

  saveApplyDetails(apply:any): Observable<string> {
    console.log("store");
    console.log(apply);

    return this.httpClient.post("http://localhost:9090/approveApply/requestAadhApprovle",apply,{ responseType: 'text' });
  }

  allApproveCitizensInformation():Observable<Citizens[]>{
    return this.httpClient.get<Citizens[]>("http://localhost:9090/approveApply/findAllAadhApprovle");
  }

  allApprovedeleteCitizen(aadharNumber:any): Observable<any> {
    console.log("deleted");
    console.log(aadharNumber);
    return this.httpClient.delete("http://localhost:9090/approveApply/deleteAadhApprovle/"+aadharNumber);
  }
}
