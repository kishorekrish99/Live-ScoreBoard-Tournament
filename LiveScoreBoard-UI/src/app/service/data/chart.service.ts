import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartService {


  constructor(private http: HttpClient) { }


  getdata(){
    return this.http.get('http://localhost:8080/user/all')
  }

  

}
