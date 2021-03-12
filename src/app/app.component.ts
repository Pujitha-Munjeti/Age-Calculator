import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AgeCalculator';
  dob;
  Year=null;
  Months;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(dob){
    const date1=new Date(dob)
    const date2=new Date();

   
  this.Year=date2.getFullYear()-date1.getFullYear();
  
  this.Months=date2.getMonth()-date1.getMonth();
  if(this.Months<0){
    this.Months=this.Months+12;
    this.Year--;
  }
  
  console.log("no of months are ",this.Months,this.Year)
  
  }

}
