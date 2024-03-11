import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UploadFileResponse {
  fileName: string;
  fileDownloadUri: string;
  contentType: string;
  size: number;
}
@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  constructor(private http: HttpClient) {}

  uploadFile(formData: FormData): Observable<UploadFileResponse> {
    // Replace with your actual Spring Boot backend URL for file upload
    return this.http.post<UploadFileResponse>('http://localhost:9090/upload-single-file', formData);
  }
}
