import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
  postData() {
    this.httpClient.post('https://api.example.com/endpoint', { data: 'some data' })
      .subscribe(data => {
        // handle the data
      });
  }
}
