import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-febonachi',
  templateUrl: './febonachi.component.html',
  styleUrls: ['./febonachi.component.css']
})
export class FebonachiComponent implements OnInit {
  number = 0;
  febonachi = 0;
  generated:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  generate(num:number){
    console.log("User entered number:",num);
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i=0;
    for(i=0; i<num; i++){
      sum = num1 + num2
      num1=num2
      num2=sum
    }
    console.log("Febonachi series result:",num2);  
    this.febonachi = num2  
    this.generated = true;
    return this.febonachi
  }

}
