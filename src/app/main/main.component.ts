import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  text;
  number1;
  date;
  datas=[{
    
  }]
  constructor() { }

  ngOnInit() {
  }
  add(){
    let data={
      number: this.number1,
      text: this.text,
      date: this.date
    };
    this.datas.push(data);

  }

}
