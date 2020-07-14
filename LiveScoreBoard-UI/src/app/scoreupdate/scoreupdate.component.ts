import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Component, OnInit } from '@angular/core';
import { ScoreupdateService } from '../service/data/scoreupdate.service';
import { NgForm } from '@angular/forms'
import { Router } from '@angular/router';
import swal from 'sweetalert2'


declare const $;

@Component({
  selector: 'app-scoreupdate',
  templateUrl: './scoreupdate.component.html',
  styleUrls: ['./scoreupdate.component.css']
})
export class ScoreupdateComponent implements OnInit {


  scores: any
  buttonenabled: boolean = false;
  newscore: any
  flag: boolean = false
  updateid: number
  updatedstatus: any
  leftplayers: any
  f: boolean = false;
  newplayer: any
  show: boolean = false;



  webSocketEndPoint: string = 'http://localhost:8080/livescore-websocket';
  topic: string = "/topic/scoreupdate";
  stompClient: any;

  constructor(private scoreupdate: ScoreupdateService, private router: Router) { }

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


    this.scoreupdate.getallscores().subscribe((d) => {

      this.scores = d;

      // console.log(d);

    }, (error) => {





      if (error.status == 500) {
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

        for (var i = 0; i < this.scores.length; i++) {
          var obj = this.scores[i];

          if (obj.id === newdata.id) {
            this.newscore = obj;
            this.f = true;
            this.newscore.id = newdata.id
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
        if (this.f === false) {

          this.scoreupdate.checkout(this.scores[0].id).subscribe((d) => {

            if (d === true) {

              this.newscore = this.scores[0];
              this.newscore.id = newdata.id
              this.newscore.name = newdata.name
              this.newscore.runs = newdata.runs;
              this.newscore.status = newdata.status
              this.newscore.four = newdata.four
              this.newscore.six = newdata.six
              this.newscore.sr = newdata.sr
              this.newscore.total = newdata.total



            }
          }, (error) => {




            if (error.status == 500) {
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
            else if (error.status == 404) {
              swal.fire({
                title: "Data not found",
                text: "Please try other time",
                icon: "error"
              })
            }
            else
              swal.fire("An error Occured", "Please Refresh the Page", "info")              

          })


          this.scoreupdate.checkout(this.scores[1].id).subscribe((d) => {
            if (d === true) {
              this.newscore = this.scores[1];
              this.newscore.id = newdata.id
              this.newscore.name = newdata.name
              this.newscore.runs = newdata.runs;
              this.newscore.status = newdata.status
              this.newscore.four = newdata.four
              this.newscore.six = newdata.six
              this.newscore.sr = newdata.sr
              this.newscore.total = newdata.total
            }
          }, (error) => {




            if (error.status == 500) {
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
            else if (error.status == 404) {
              swal.fire({
                title: "Data not found",
                text: "Please try other time",
                icon: "error"
              })
            }
            else
              swal.fire("An error Occured", "Please Refresh the Page", "info")

          })

        }

        // this.newscore.id = newdata.id
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

  updateonclick(id, score) {

    this.flag = true
    this.updateid = id;
    this.newscore = score


  }


  out() {

    this.buttonenabled = true;
    this.updatedstatus = "out";
    this.scoreupdate.getleftplayers().subscribe((d) => {

      this.leftplayers = d;

    }, (error) => {
    


      if (error.status == 500) {
        swal.fire({
          title: "Not able to fetch left Players",
          text: "Please try other time",
          icon: "error",
          showConfirmButton: false,
          allowOutsideClick: false,
          allowEscapeKey: false,
          allowEnterKey: false
        })
      }
      else if (error.status == 404) {
        swal.fire({
          title: "All Out",
          text: "Start Second innings",
          icon: "info"
        })
      }
      else
        swal.fire("An error Occured", "Please Refresh the Page", "info")
       

    })

  }
  // injury() {
  //   this.buttonenabled = true;
  //   this.updatedstatus = "injury"
  //   this.scoreupdate.getleftplayers().subscribe((d) => {
  //     this.leftplayers = d;
  //   }, (error) => {



  //     if (error.status >= 500) {
  //       swal.fire({
  //         title: "Server Down",
  //         text: "Please try other time",
  //         icon: "error",
  //         showConfirmButton: false,
  //         allowOutsideClick: false,
  //         allowEscapeKey: false,
  //         allowEnterKey: false
  //       })
  //     }
  //     else if (error.status >= 400) {
  //       swal.fire({
  //         title: "Data not found",
  //         text: "Please try other time",
  //         icon: "error"
  //       })
  //     }
  //     else
  //       swal.fire("An error Occured", "Please Refresh the Page", "info")
  //   })

  // }

  makeupdate(form: NgForm) {

    console.log(form);

    var data = { id: null, name: null, status: null, runs: null, four: null, six: null, sr: null, total: null }

    data.id = this.updateid
    data.four = this.newscore.four
    data.name = this.newscore.name
    data.six = this.newscore.six
    data.sr = this.newscore.sr
    data.total = this.newscore.total
    data.runs = this.newscore.runs


    if (this.buttonenabled == false) {

      data.status = "playing"
      this.flag = false;
      this.buttonenabled = false;
      this.stompClient.send("/app/scorecard", {}, JSON.stringify(data));

    }
    else {

      data.status = this.updatedstatus

      this.scoreupdate.saveplayer(data).subscribe((d) => {

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
        else
          swal.fire("An error Occured", "Please Refresh the Page", "info")




      })

      this.scoreupdate.getnewplayer(form.value.name).subscribe((d) => {
        this.newplayer = d;
        this.flag = false;
        this.buttonenabled = false;
        this.stompClient.send("/app/scorecard", {}, JSON.stringify(this.newplayer));

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
            title: "Player not found",
            text: "Please try other time",
            icon: "error"
          })
        }
        else
          swal.fire("An error Occured", "Please Refresh the Page", "info")




      })


    }


  }


  runsbutton(runs: number) {

    if (runs === 4) {

      this.newscore.four = this.newscore.four + 1
      this.newscore.total = this.newscore.total + 4
    }
    else if (runs === 6) {
      this.newscore.six = this.newscore.six + 1
      this.newscore.total = this.newscore.total + 6
    }
    else {
      this.newscore.runs = this.newscore.runs + runs
      this.newscore.total = this.newscore.total + runs
    }



  }



}
