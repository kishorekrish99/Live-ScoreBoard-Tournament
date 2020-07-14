import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from '../../app.constant'

@Injectable({
  providedIn: 'root'
})
export class ScoreupdateService {

  constructor(private http: HttpClient) { }
  Login(){
    return this.http.get('http://localhost:8080/login');

  }

  getallscores(){

      return this.http.get(`${API_URL}/user/scores`);

  }

  updateascore(id,data){
    
    return this.http.put(`http://localhost:8080/app/scorecard`,data);

  }

  getleftplayers(){
    return this.http.get(`${API_URL}/user/leftplayers`)
  }

  saveplayer(data){
    return this.http.put(`${API_URL}/user/saveauser`,data);
  }

  getnewplayer(name){
    return this.http.get(`${API_URL}/user/getplayer/${name}`)
  }

  checkout(id){

    return this.http.get(`${API_URL}/user/check/${id}`);

  }

}
