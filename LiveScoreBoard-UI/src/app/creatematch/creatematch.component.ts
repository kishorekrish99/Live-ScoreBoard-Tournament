import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { formatDate } from '@angular/common';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { CreatematchService } from '../service/data/creatematch.service';
import { Router } from '@angular/router';

declare const $;

@Component({
  selector: 'app-creatematch',
  templateUrl: './creatematch.component.html',
  styleUrls: ['./creatematch.component.css']
})

export class CreatematchComponent implements OnInit, AfterViewInit {

  teamA: any
  teamB: any
  today = new Date();
  todaysDataTime = '';


  constructor(private element: ElementRef,private matchcreation: CreatematchService,private router:Router ) { }

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
  }

  ngAfterViewInit() {

    $(this.element.nativeElement).bootstrapMaterialDesign();

  }

  makejson(form: NgForm){
       var data =
       [
        {
          player_name: form.value.player1 
        },
        {
          player_name: form.value.player2
        },
        {
          player_name: form.value.player3
        },
        {
          player_name: form.value.player4
        },
        {
          player_name: form.value.player5
        },
        {
          player_name: form.value.player6 
        },
        {
          player_name: form.value.player7
        },
        {
          player_name: form.value.player8
        },
        {
          player_name: form.value.player9
        },
        {
          player_name: form.value.player10
        },
        {
          player_name: form.value.player11
        },
        {
          player_name: form.value.substitute
        }
      ]

      return data;
  }

  teamAsubmit(form: NgForm) {

    this.teamA = this.makejson(form)

  }
  teamBsubmit(form: NgForm) {

    this.teamB = this.makejson(form)
   
  }

  creatematch(form: NgForm) {

    var matchdata={
      matchs: {
        toss: form.value.toss,
        overs: form.value.overs,
        team: [
          {
            team_name: form.value.teamAname,
            manager: form.value.teamAmanager,
            coach: form.value.coachAname,
            players: this.teamA
          },
          {
            team_name: form.value.teamBname,
            manager: form.value.teamBmanager,
            coach: form.value.coachBname,
            players: this.teamB
          }
        ]
      }
    }


    this.matchcreation.matchsenddata(matchdata).subscribe((d)=>{

           

    },(error)=>{

      

    })

  }

}
