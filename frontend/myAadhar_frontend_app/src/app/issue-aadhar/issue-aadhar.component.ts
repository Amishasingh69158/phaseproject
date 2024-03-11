import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-issue-aadhar',
  templateUrl: './issue-aadhar.component.html',
  styleUrls: ['./issue-aadhar.component.css']
})
export class IssueAadharComponent {
  messageRef = new FormGroup({
    message:new FormControl(),
    password:new FormControl(),
    typeofuser:new FormControl()
  })
  constructor(public router:Router){}

  f1:boolean = true;
  f2:boolean = false;
  apply(): void{
    let userMessage = this.messageRef.value;

    sessionStorage.setItem("message",userMessage.message);     // set in session storage. 
    this.router.navigate(["citizenshome"],{skipLocationChange:true})

  }

}
