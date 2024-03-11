import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppcitizenService } from '../appcitizen.service';
@Component({
  selector: 'app-new-aadharcard',
  templateUrl: './new-aadharcard.component.html',
  styleUrls: ['./new-aadharcard.component.css']
})
export class NewAadharcardComponent {
  appcitizensRef = new FormGroup({ 
    address:new FormControl(),
     dob:new FormControl(),
     emailid:new FormControl(),
     name:new FormControl(),
     password:new FormControl(),
     phonenumber:new FormControl(),
     gender:new FormControl()
   });
   message: string = '';
   constructor(public ac:AppcitizenService){}
   createAppCitizensAccount(): void {
    let appCitizens = this.appcitizensRef.value;
    console.log("Creating app citizens account:", appCitizens);
    
    this.ac.createAppCitizensAccount(appCitizens).subscribe({
      next: (data: string) => {
        console.log("Response:", data);
        this.message = data; // Assign the response to 'message'
        this.appcitizensRef.reset(); // Reset the form
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
  
  
}
