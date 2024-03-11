import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitizensService } from '../citizens.service';
import { Citizens } from '../citizens';
import { Appcitizen } from '../appcitizen';
import { FormControl, FormGroup } from '@angular/forms';
import { AppcitizenService } from '../appcitizen.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit{
  citizensRef = new FormGroup({ 
    address:new FormControl(),
     dob:new FormControl(),
     emailid:new FormControl(),
     name:new FormControl(),
     password:new FormControl(),
     phonenumber:new FormControl(),
     gender:new FormControl(),
     massage:new FormControl(),
     status:new FormControl()
   });
  f1:boolean = true;
  f2:boolean = false;
  allCitizends:Array<Citizens>=[];
  citizends:Array<Citizens>=[];
  appcitizen:Array<Appcitizen>=[];
  approveAll:Array<Appcitizen>=[];
    constructor(public router:Router,public cs:CitizensService,public as:AppcitizenService){}
  
    ngOnInit(): void {
        this.cs.allCitizensInformation().subscribe({
          next:(result:any)=> {
              this.allCitizends=result;
          },
          error:(error:any)=> {
  
          },
          complete:()=> console.log("done!")
        })

        this.as.allAppCitizensInformation().subscribe({
          next:(result:any)=> {
            this.appcitizen=result;
        },
        error:(error:any)=> {

        },
        complete:()=> console.log("done!")
        })
        this.cs.allApproveCitizensInformation().subscribe({
          next:(result:any)=> {
            this.approveAll=result;
        },
        error:(error:any)=> {

        },
        complete:()=> console.log("done!")
        })
    }
    logout(): void {
      this.router.navigate(["login"],{skipLocationChange:true})
    }
    message: string = '';
    findCitizenByStatus(): void{
      this.f2=true;
  this.f1=false;
      this.cs.findCitizenByStatus().subscribe({
        next:(result:any)=> {
            this.allCitizends=result;
        },
        error:(error:any)=> {

        },
        complete:()=> console.log("done!")
      })
    }
    createAppCitizensAccount(): void {
      let citizens = this.citizensRef.value;
      console.log("Creating app citizens account:", citizens);
      
      this.cs.createCitizensAccount(citizens).subscribe({
        next: (data: string) => {
          console.log("Response:", data);
          this.message = data; // Assign the response to 'message'
          this.citizensRef.reset(); // Reset the form
        },
        error: (error: any) => {
          console.error("Error occurred:", error);
          // Handle error appropriately
        },
        complete: () => {
          console.log("Request completed");
        }
      });
    }
   deleteCitizen(aadharnumber: any): void{
     alert(aadharnumber);
     this.cs.deleteCitizen(aadharnumber).subscribe({
      next:(data:any)=>{console.log(data)
        this.f1=true;
        this.f2=false;},
      error:(error:any)=>console.log(error),
      complete:()=>{   }
    })
   }
    AppCitizenadd(citizens: any): void {
      alert("are you shure you want to approve the addharcard");
      this.citizensRef.get("name")?.setValue(citizens.name);
      this.citizensRef.get("gender")?.setValue(citizens.gender);
      this.citizensRef.get("dob")?.setValue(citizens.dob);
      this.citizensRef.get("phonenumber")?.setValue(citizens.phonenumber);
      this.citizensRef.get("address")?.setValue(citizens.address);
      this.citizensRef.get("emailid")?.setValue(citizens.emailid);
      this.citizensRef.get("password")?.setValue(citizens.password);

      const applicationNodelete: number = parseInt(citizens.aadharnumber);
      console.log(applicationNodelete);
      this.createAppCitizensAccount();
      this.cs.deleteApproveCitizen(applicationNodelete).subscribe({
        next:(data:any)=>{console.log(data)
          this.citizensRef.reset();
           },
          error:(error:any)=>console.log(error),
          complete:()=>{   console.log("Deletion request completed")
        }
    
      }),
this.ngOnInit(),
      this.cs.allCitizensInformation().subscribe({
        next:(result:any)=> {
            this.allCitizends=result;
        },
        error:(error:any)=> {

        },
        complete:()=> console.log("done!")
      })
  }
  Approved(citizens: any): void {
    alert("are you shure you want to approve the Duplicate addharcard");
    this.citizensRef.get("name")?.setValue(citizens.name);
    this.citizensRef.get("phonenumber")?.setValue(citizens.phonenumber);
    this.citizensRef.get("emailid")?.setValue(citizens.emailid);
    this.citizensRef.get("massage")?.setValue(citizens.massage);
    this.router.navigate(["login/upload_file"],{skipLocationChange:true})
    const applicationNodelete: number = parseInt(citizens.aadharnumber);
    this.cs.allApprovedeleteCitizen(applicationNodelete).subscribe({
      next:(data:any)=>{console.log(data),
        this.citizensRef.reset();
         },
        error:(error:any)=>console.log(error),
        complete:()=>{   console.log("Deletion request completed")
      }
  
    })
  }
}