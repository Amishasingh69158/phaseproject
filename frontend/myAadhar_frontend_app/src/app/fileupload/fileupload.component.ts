import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileServiceService } from '../file-service.service';
@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {

  constructor(private fileUploadService: FileServiceService) { }
  selectedFile: File | null = null;
  uploadProgress: number=0;
  onFileSelected(event: any): void {
    const fileList: FileList = event.target.files;
    if (fileList && fileList.length > 0) {
      this.selectedFile = fileList[0];
    }
  }

  uploadFile(): void {
    if (this.selectedFile) {
      this.fileUploadService.uploadFile(this.selectedFile)
        .subscribe(progress => {
          this.uploadProgress = progress;
        
            alert("File upload completed")
            // File upload completed
            this.selectedFile = null;
          
        });
    }
  }
}