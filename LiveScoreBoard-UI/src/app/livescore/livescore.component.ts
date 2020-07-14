import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Component, OnInit } from '@angular/core';
import { Chart } from "node_modules/chart.js"
import { ScoreboarddataService } from '../service/data/scoreboarddata.service';
import { ChartService } from '../service/data/chart.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-livescore',
  templateUrl: './livescore.component.html',
  styleUrls: ['./livescore.component.css']
})
export class LivescoreComponent implements OnInit {

  f: number
  showchart: number = 0
  scores: any
  newscore: any
  webSocketEndPoint: string = 'http://localhost:8080/livescore-websocket';
  topic: string = "/topic/scoreupdate";
  stompClient: any;
  fi: boolean = false;
  data: any



  names = []
  runs = []
  fours = []
  six = []
  total = []


  constructor(private scoreupdate: ScoreboarddataService, private barchart: ChartService) { }

  ngOnInit() {

    this.scoreupdate.getallscores().subscribe((d) => {

      this.scores = d;

    }, (error) => {

      if (error.status == 500) {
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
      else if (error.status == 404) {
        swal.fire({
          title: "Players Not Found",
          text: "Please try other time",
          icon: "error"
        })
      }
      else
        swal.fire("An error Occured", "Please Refresh the Page", "info")
       

    })

    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this._connect()

    this.barchart.getdata().subscribe((d)=>{

      this.names = d['names'];
      this.runs = d['runs']
      this.fours = d['fours']
      this.six = d['six']
      this.total = d['total']

      console.log(this.names);

    },(error)=>{
              
      if(error.status==500){
        swal.fire({
          title: "Something Went Wrong",
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
          title: "Data not found",
          text: "Please try other time",
          icon: "error"
         
        })
      } 
      else
      swal.fire("An error Occured","Please Refresh the Page","error") 


    })


    this.updatechart();



  }

  errorCallBack(error) {
    
    swal.fire({
      title: "Connectivity error",
      text: "Please Refresh the Page",
      icon: "info"
    })

    setTimeout(() => {
      this._connect();
    }, 5000);
  }

  _connect() {

    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);

    const _this = this;

    _this.stompClient.connect({}, (frame) => {
      _this.stompClient.subscribe(_this.topic, (sdkEvent) => {

        var newdata = (JSON.parse(sdkEvent.body).body)[0];

        var data = (JSON.parse(sdkEvent.body).body)[1]
        this.names = data['names'];
        this.runs = data['runs']
        this.fours = data['fours']
        this.six = data['six']
        this.total = data['total']

        this.updatechart();



  


        for (var i = 0; i < this.scores.length; i++) {
          var obj = this.scores[i];

          if (obj.id === newdata.id) {
            this.newscore = obj;
            this.fi = true;
            this.newscore.name = newdata.name
            this.newscore.runs = newdata.runs;
            this.newscore.status = newdata.status
            this.newscore.four = newdata.four
            this.newscore.six = newdata.six
            this.newscore.sr = newdata.sr
            this.newscore.total = newdata.total
            break;
          }
        }
        if (this.fi === false) {

          this.scoreupdate.checkout(this.scores[0].id).subscribe((d) => {
            if (d === true) {
              this.newscore = this.scores[0];
              this.newscore.id = newdata.id;
              this.newscore.name = newdata.name
              this.newscore.runs = newdata.runs;
              this.newscore.status = newdata.status
              this.newscore.four = newdata.four
              this.newscore.six = newdata.six
              this.newscore.sr = newdata.sr
              this.newscore.total = newdata.total
            }
          }, (error) => {



            if(error.status==500){
              swal.fire({
                title: "Something Went Wrong",
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
                title: "Data not found",
                icon: "error"
               
              })
            } 
            else
            swal.fire("An error Occured","Please Refresh the Page","error") 



          })

          this.scoreupdate.checkout(this.scores[1].id).subscribe((d) => {
            if (d === true) {
              this.newscore = this.scores[1];

              this.newscore.id = newdata.id;
              this.newscore.name = newdata.name
              this.newscore.runs = newdata.runs;
              this.newscore.status = newdata.status
              this.newscore.four = newdata.four
              this.newscore.six = newdata.six
              this.newscore.sr = newdata.sr
              this.newscore.total = newdata.total
            }
          }, (error) => {



            if(error.status==500){
              swal.fire({
                title: "Something went Wrong",
                text: "Please try other time",
                icon: "error",
                showConfirmButton: false,
                allowOutsideClick: false,
                allowEscapeKey: false,
                allowEnterKey: false
              })
            }
            else if(error.status==404){
              swal.fire({
                title: "Data not found",
                text: "Please try other time",
                icon: "error"
               
              })
            } 
            else
            swal.fire("An error Occured","Please Refresh the Page","error") 

          })

        }
        // this.newscore.id = newdata.id;
        // this.newscore.name = newdata.name
        // this.newscore.runs = newdata.runs;
        // this.newscore.status = newdata.status
        // this.newscore.four = newdata.four
        // this.newscore.six = newdata.six
        // this.newscore.sr = newdata.sr
        // this.newscore.total = newdata.total

      });


    }, this.errorCallBack);


  }


  updatechart(){

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
