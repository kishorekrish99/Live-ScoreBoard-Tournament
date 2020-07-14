import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';

declare const $;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit,AfterViewInit {

  constructor(private element: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    $(this.element.nativeElement).bootstrapMaterialDesign();

  }

}
