import { Component, OnInit,ElementRef,AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'

declare const $;

@Component({
  selector: 'app-addteam',
  templateUrl: './addteam.component.html',
  styleUrls: ['./addteam.component.css']
})
export class AddteamComponent implements OnInit,AfterViewInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
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

  ngAfterViewInit(){
    $(this.element.nativeElement).bootstrapMaterialDesign();
  }
  submitplayer(form: NgForm){
         if(!form.valid) return;
  }
}
