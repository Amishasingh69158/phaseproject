import { Component, OnInit } from '@angular/core';
import { CitizensService } from '../citizens.service';
import { Citizens } from '../citizens';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizendashboard',
  templateUrl: './citizendashboard.component.html',
  styleUrls: ['./citizendashboard.component.css']
})
export class CitizendashboardComponent implements OnInit {
  appcitizensRef = new FormGroup({ 
    aadharnumber:new FormControl(),
    address:new FormControl(),
     dob:new FormControl(),
     phonenumber:new FormControl(),
     name:new FormControl(),
     emailid:new FormControl(),
     message:new FormControl(),
     issue_date:new FormControl()
   });
   messageRef = new FormGroup({
    aadharnumber:new FormControl(),
    emailid:new FormControl(),
    message:new FormControl(),
    name:new FormControl(),
    phonenumber:new FormControl()

  });
  userEmail: string | null = null;
  citizends: Citizens[] = []; // Define citizends as an array of Citizens
  f1:boolean = true;
  f2:boolean = false;
  f3:boolean = true;
  f4:boolean = false;
  citizens:Array<Citizens>=[];
  constructor(private citizensService: CitizensService,public router:Router) {}
  ngOnInit(): void {
    // Retrieve emailid from sessionStorage
    this.userEmail = sessionStorage.getItem("user");
    if (this.userEmail) {
      // Call the function to get citizen details
      this.getCitizenDetails(this.userEmail);
    } else {
      console.log("Email ID not found in session storage.");
    }
  }
  getCitizenDetails(userEmail: string): void {
    // Call the service method to get citizen details by email id
    this.citizensService.searchCitizenByEmailiId(userEmail).subscribe({
      next: (data: Citizens) => {
        // Assign the response data to citizends array
        if(data==null){this.msg = "Your Adhar Card Not Approved Yet";}
        this.citizends.push(data); // Assuming the response is a single citizen object
        console.log('Citizen Details:', this.citizends);
      }, 
      error: (error: any) => {
        console.error('Error fetching citizen details:', error);
        // Handle error if necessary
      },
      complete: () => console.log("Citizen details loaded")
    });
  }
  download(aadharnumber:number): void{

  }
  msg:string ="";
  updateCitizenDetails(): void {
    let citizens = this.appcitizensRef.value;
      console.log("Updating app citizens account:", citizens);
      
      this.citizensService.updateCitizenDetails(citizens).subscribe({
        next: (data: string) => {
          this.msg = data; // Assign the response to 'message'
        },
        error: (error: any) => {
          console.error("Error occurred:", error);
          // Handle error appropriately
        },
        complete: () => {
          console.log("Request completed");
          this.f1=true;
          this.f2=false;
        }
      });
  }
  saveApply(): void{
    let citizens = this.messageRef.value;
    console.log("Saving app citizens account:", citizens);
    this.citizensService.saveApplyDetails(citizens).subscribe({
      next: (data: string) => {
        this.msg = data; // Assign the response to 'message'
      },
      error: (error: any) => {
        console.error("Error occurred:", error);
        // Handle error appropriately
      },
      complete: () => {
        console.log("Request completed");
        this.f3=true;
        this.f4=false;
      }
    });

  }
  setCitizenDetails(citizens:any): void {
  this.f2=true;
  this.f1=false;
    this.appcitizensRef.get("aadharnumber")?.setValue(citizens.aadharnumber);
    this.appcitizensRef.get("dob")?.setValue(citizens.dob);
    this.appcitizensRef.get("phonenumber")?.setValue(citizens.phonenumber);
    this.appcitizensRef.get("address")?.setValue(citizens.address);

  }
  apply(citizens:any): void{
    //let userMessage = this.messageRef.value;
    //sessionStorage.setItem("message",userMessage.message);     // set in session storage. 
   //this.router.navigate(["citizenshome"],{skipLocationChange:true})
   this.messageRef.get("aadharnumber")?.setValue(citizens.aadharnumber);
   this.messageRef.get("name")?.setValue(citizens.name);
   this.messageRef.get("phonenumber")?.setValue(citizens.phonenumber);
   this.messageRef.get("emailid")?.setValue(citizens.emailid);
   this.messageRef.get("message")?.setValue(citizens.message);
   this.f4=true;
   this.f3=false;
  }
}
