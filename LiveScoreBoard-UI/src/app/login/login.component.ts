import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Session } from 'protractor';

declare const $;
declare var gapi : any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public gapiSetup: boolean = false; // marks if the gapi library has been loaded
  public authInstance: gapi.auth2.GoogleAuth;
  public error: string;
  public user: gapi.auth2.GoogleUser; 

  constructor(private router:Router){}

  async ngOnInit() {
    if (await this.checkIfUserAuthenticated()) {
      this.user = this.authInstance.currentUser.get();   
    }
    
  }

  async initGoogleAuth(): Promise<void> {
    //  Create a new Promise where the resolve function is the callback
    // passed to gapi.load  
    const pload = new Promise((resolve) => {
      gapi.load('auth2', resolve);
    });

    // When the first promise resolves, it means we have gapi loaded
    // and that we can call gapi.init
    return pload.then(async () => {
      await gapi.auth2
        .init({ client_id: '970082683053-iu40ititp3ut9s49p1u5fdbf05qrenbs.apps.googleusercontent.com' })
        .then(auth => {
          this.gapiSetup = true;
          this.authInstance = auth;
        });
    });
  }

  async authenticate(): Promise<gapi.auth2.GoogleUser> {
    // Initialize gapi if not done yet
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }

    // Resolve or reject signin Promise
    return new Promise(async () => {
      await this.authInstance.signIn().then(
        user => this.user = user,
        error => this.error = error);
        if(this.gapiSetup){
        sessionStorage.setItem("ac_tkn",gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token);
        sessionStorage.setItem("name",this.authInstance.currentUser.get().getBasicProfile().getName());
        sessionStorage.setItem("pic",this.authInstance.currentUser.get().getBasicProfile().getImageUrl());
        sessionStorage.setItem("email",this.authInstance.currentUser.get().getBasicProfile().getEmail());
      }
        this.router.navigate(['/dashboard'])
    });
  }

  async checkIfUserAuthenticated(): Promise<boolean> {
    // Initialize gapi if not done yet
    
    console.log(this.gapiSetup)
    if (!this.gapiSetup) {
      await this.initGoogleAuth();
    }
    // console.log(this.authInstance.isSignedIn.get())
    return this.authInstance.isSignedIn.get();
  }
  
}
