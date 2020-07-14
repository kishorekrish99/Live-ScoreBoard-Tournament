import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  image:string=sessionStorage.getItem("pic")
  name:string=sessionStorage.getItem("name")
  email:string=sessionStorage.getItem("email")
  constructor(private router:Router) { }
  //auth2.isSignedIn.get()

  ngOnInit() {
  

    if(sessionStorage.getItem("ac_tkn")===null)
    this.router.navigate(['/login'])  
  }

}
