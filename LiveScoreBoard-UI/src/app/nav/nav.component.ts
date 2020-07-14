import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  logout(){
    sessionStorage.clear();
    if(sessionStorage.getItem("ac_tkn")==null){
      console.log("logout ayindi")
    }
    gapi.auth2.getAuthInstance().disconnect();
    this.router.navigate(['/login'])
  } 

}
