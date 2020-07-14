import { Component, OnInit } from '@angular/core';
import { ScoreboarddataService } from '../service/data/scoreboarddata.service';
import swal from 'sweetalert2'
import * as jspdf from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: ['./scorecard.component.css']
})
export class ScorecardComponent implements OnInit {

  allbattingdetails: any

  constructor(private batting: ScoreboarddataService) { }

  ngOnInit() {

    // swal.fire({
    //   title: "Server Down",
    //   text: "Please try other time",
    //   icon: "error",
    //   showConfirmButton: false,
    //   allowOutsideClick: false,
    //   allowEscapeKey: false,
    //   allowEnterKey: false
    // })

   
      this.batting.getbattingdetails().subscribe((d)=>{


           this.allbattingdetails=d;

      },(error)=>{


        
        
        if(error.status==500){
          swal.fire({
            title: "An error Occured",
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
            text: "Please try again",
            icon: "error"
          })
        } 
        else
        swal.fire("An error Occured","Please Refresh the Page","error")




      })

  }
  Download(){
    var element = document.getElementById("batting")
  
    html2canvas(element).then((canvas) => {
  
      //  console.log(canvas);
  
      var imgdata = canvas.toDataURL('image/png')
  
      var doc = new jspdf();
  
  
      var imgheight = canvas.height * 208 / canvas.width;
  
      doc.addImage(imgdata, 0, 0, 208, imgheight)
  
      doc.save('score.pdf')
  
    })
  }
}
