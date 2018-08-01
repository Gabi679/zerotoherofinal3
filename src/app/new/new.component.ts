import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service'
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor(private service: MainService) { }
  category;
  ngOnInit() {
  }

  add(){
    this.service.add(this.category);
  }
}
