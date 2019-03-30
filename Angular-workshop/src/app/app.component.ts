import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Angular-workshop'
  productList = [{
    pId : "0001",
    pName : "แปรงสีฟัน",
    pCost : 200
  },{
    pId : "0002",
    pName : "แก้วน้ำ",
    pCost : 10
  },{
    pId : "0003",
    pName : "ยาสีฟัน",
    pCost : 20
  }];
selectedProduct :any;
  selectProduct(p){
this.selectedProduct = p;
console.log(p);

  }
  constructor(){
   
  }
}
