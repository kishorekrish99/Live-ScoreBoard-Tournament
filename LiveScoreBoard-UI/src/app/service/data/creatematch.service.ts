import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatematchService {

  constructor(private http: HttpClient) { }

  matchsenddata(data){
     return this.http.post('http://localhost:8080/matches',data);
  }


}
