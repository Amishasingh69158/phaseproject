import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CitizenregisterComponent } from './citizenregister/citizenregister.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { CitizendashboardComponent } from './citizendashboard/citizendashboard.component';
import { IssueAadharComponent } from './issue-aadhar/issue-aadhar.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { NewAadharcardComponent } from './new-aadharcard/new-aadharcard.component';
import { AllFilesComponent } from './all-files/all-files.component';

const routes: Routes = [
  {"path":"login",component:LoginComponent},
  {"path":"register",component:CitizenregisterComponent},
  {"path":"adminhome",component:AdmindashboardComponent},
  {path:"citizenshome",component:CitizendashboardComponent},
  {path:"newAadhar",component:NewAadharcardComponent},
  {path:"login/upload_file",component:FileuploadComponent},
  {path:"files",component:AllFilesComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"issue",component:IssueAadharComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
