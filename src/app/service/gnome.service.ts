import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URL = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

@Injectable({
  providedIn: 'root'
})

export class GnomeService {

  constructor(private http: HttpClient) { }

  public getJSON(): Promise<any> {
    return this.http.get(BASE_URL).toPromise();
  }

}
