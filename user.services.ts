


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  download(file: string | undefined): Observable<Blob> {
    return this.http.get(`${baseUrl}http://localhost:8787/users/export/pdf/`, {
      responseType: 'blob'
    });
  }
}



