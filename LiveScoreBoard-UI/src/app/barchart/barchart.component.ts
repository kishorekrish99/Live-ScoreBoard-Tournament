import { Component, OnInit } from '@angular/core';
import { Chart } from "node_modules/chart.js"
import { ChartService } from '../service/data/chart.service';
import swal from 'sweetalert2'

declare const $;

@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})

export class BarchartComponent implements OnInit {

  names = []
  runs = []
  fours = []
  six = []
  total = []

  constructor(private barchart: ChartService) { }

  ngOnInit() {

    this.barchart.getdata().subscribe((d) => {

      this.names = d['names'];
      this.runs = d['runs']
      this.fours = d['fours']
      this.six = d['six']
      this.total = d['total']

      console.log(this.names);

    }, (error) => {

      if(error.status==500){
        swal.fire({
          title: "Something went Wrong",
          text: "Please try again",
          icon: "error",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        })
      }
      else if(error.status==404){
        swal.fire({
          title: "Player details not found",
          text: "Please try other time",
          icon: "error"
         
        })
      } 
      else
      swal.fire("An error Occured","Please Refresh the Page","error")  

    })


    setTimeout(() => {
      var chBar = document.getElementById("mychart");

      var chartData = {
        labels: this.names,
        datasets: [{
          data: this.runs,
          backgroundColor: '#ff0000',
          label: 'runs'
        },
        {
          data: this.fours,
          backgroundColor: '#ffbf00',
          label: 'fours'
        },
        {
          data: this.six,
          backgroundColor: '#F18AE1',
          label: 'six'
        },
        {
          data: this.total,
          backgroundColor: '#8AB2F1',
          label: 'total'
        }
        ]
      };
      if (chBar) {
        new Chart(chBar, {
          type: 'bar',
          data: chartData,
          options: {
            scales: {
              xAxes: [{
                barPercentage: 0.4,
                categoryPercentage: 0.5
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: false
                }
              }]
            },
            legend: {
              display: false
            }
          }
        });
      }
    }, 1000);


  }







}
