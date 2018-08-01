import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { MainService } from '../main.service'
import { TranslationService } from '../translation.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public lineChartData:Array<any> = [
    {data: [],
       label: 'költésgek'},
  ];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartType:string = 'line';
  
  text;
  number1;
  date;
  choosed='all';
  category;
  categories;
  datas=[]
  constructor(private router:Router, private service: MainService, private trans: TranslationService) { }

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
    this.lineChartData[0].data.push(this.number1);
    this.lineChartLabels.push(this.date);
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
  changeLanguage(){
    if(this.trans.language=='eng'){
      this.trans.language='hun';
    }else{
      this.trans.language='eng';
    }
  }


}
