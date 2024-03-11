import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CitizenregisterComponent } from './citizenregister/citizenregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { IssueAadharComponent } from './issue-aadhar/issue-aadhar.component';
import { CitizendashboardComponent } from './citizendashboard/citizendashboard.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NewAadharcardComponent } from './new-aadharcard/new-aadharcard.component';
import { AllFilesComponent } from './all-files/all-files.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CitizenregisterComponent,
    AdmindashboardComponent,
    IssueAadharComponent,
    CitizendashboardComponent,
    FileuploadComponent,
    NewAadharcardComponent,
    AllFilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }