import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { API_URL } from '../../app.constant'

@Injectable({
  providedIn: 'root'
})
export class ScoreboarddataService {

  constructor(private http: HttpClient) { }

  getallscores(){

      return this.http.get(`http://localhost:8080/user/scores`)

  }

  checkout(id){

    return this.http.get(`http://localhost:8080/user/check/${id}`);

  }

  getbattingdetails(){
    return this.http.get(`${API_URL}/user/battingdetails`);
  }
  
}
