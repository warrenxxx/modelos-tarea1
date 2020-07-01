import { Component, OnInit } from '@angular/core';
declare var Raphael :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  value="";
  title = 'modelos1';



  ngOnInit(){

          // Creates canvas 320 × 200 at 10, 50
      var paper = Raphael(10, 50, 320, 200);


      var circle = paper.circle(50, 40, 10);


      circle.attr("fill", "#f00");

      circle.attr("stroke", "#fff");
      circle.animate({cy:150},2000);

  }
  getNumbers():number[]{
    return this.value.split("-").map(e=>parseInt(e))    ;
  }
  change(){
    console.log(this.getNumbers());
  }
  reloadCanvas(){
    
  }
}
