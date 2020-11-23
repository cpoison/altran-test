import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
 
@Injectable({
  providedIn: 'root'
})
  
export class HttpClientService {

  constructor(private http: HttpClient) { }
  
  getGnomes(): Promise<any> {
    return this.http.get(BASE_URL).toPromise(); 
  }
  
  // getGnomeById(): Promise<any> {
  //   return this.http.get(BASE_URL).toPromise(); 
    
  // }

}
