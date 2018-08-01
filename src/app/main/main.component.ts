import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../main.service'
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  text;
  number1;
  date;
  choosed='all';
  category;
  categories;
  datas=[]
  constructor(private router:Router, private service: MainService) { }

  ngOnInit() {
    this.categories=this.service.getCategories();
  }
  add(){
    let data={
      number: this.number1,
      text: this.text,
      date: this.date,
      category: this.category
    };
    this.datas.push(data);

  }
  gotoNew(){
    this.router.navigate(['/new']);
  }
  delete(index){
      for(let i=0; i<this.datas.length;i++){
        if(i==index){
          this.datas.splice(i,1);
          break;
        }
      }
    
  }
  

}
