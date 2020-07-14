import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ScoreupdateService } from '../service/data/scoreupdate.service';

declare const $;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','./styles.css']
})
export class DashboardComponent implements OnInit {

  
  constructor(private router:Router,private Scoreupdate:ScoreupdateService) { }

  ngOnInit() {
    if(sessionStorage.getItem("ac_tkn")===null)
    this.router.navigate(['/login'])  
    var fullHeight = function () {

      $('.js-fullheight').css('height', $(window).height());
      $(window).resize(function () {
        $('.js-fullheight').css('height', $(window).height());
      });
  
    };
    fullHeight();
  
    $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
    });

    // swal.fire("Good job!", "You clicked the button!", "error")

  }
    /*message : any;
    Login(){
      this.Scoreupdate.Login().subscribe(data=>this.message);
      console.log(this.message);
    }*/

}
