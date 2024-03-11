import { Component } from '@angular/core';
import { FileServiceService } from '../file-service.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-all-files',
  templateUrl: './all-files.component.html',
  styleUrls: ['./all-files.component.css']
})
export class AllFilesComponent {
  files: any = [];

  constructor(private fileService: FileServiceService) { }

  ngOnInit(): void {
    this.getFiles();
  }

  getFiles(): void {
    this.fileService.getFiles().subscribe(
      (response: any[]) => {
        response.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.data;
          this.files.push(element);
        });
      },
      error => {
        console.error('Error fetching files:', error);
      }
    );
  }

  downloadFile(fileId: number): void {
    this.fileService.downloadFile(fileId).subscribe(response => {
      if (response.body) { // Check if response has a body
        const fileNameFromUrl = "file";
        const contentType = response.headers.get("Content-Type");
    
        // Create a link with the blob directly from the response body
        const link = document.createElement("a");
        link.href = window.URL.createObjectURL(response.body);
        link.download = fileNameFromUrl;
        link.click();
        window.URL.revokeObjectURL(link.href);
        link.remove();
      } else {
        console.error("Response has no body");
        // Handle empty response
      }
    });
    }
}
