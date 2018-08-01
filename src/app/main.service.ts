import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  categories=[{
    name: 'étel'
  },
  {
    name: 'szórakozás'
  },
  {
    name: 'lakhatás'
  }
]
  constructor() { }

  add(param){
    this.categories.push({name: param})
  }
  getCategories(){
    return this.categories;
  }

}
