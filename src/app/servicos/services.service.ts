import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http:HttpClient) {}
  obterDados(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
