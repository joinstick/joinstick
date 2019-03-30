import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {
   cartList:any=[];
  _addProduct:any;
   get addProduct():any{
      return this._addProduct;
   }
   @Input()
    set addProduct(val: any){
      if(val){
        let _index = -1
        // this.cartList.push(JSON.parse(JSON.stringify(val)));
        this.cartList.forEach((object,index)=>{
          if(object.pId == val.pId){
            _index = index;
          }});
        if(_index>-1){
          this.cartList[_index].qty = Number(val.qty);
        }else{
          this.cartList.push(JSON.parse(JSON.stringify(val)));
        }
      }
    }
  constructor() { }

  ngOnInit() {
  }

}
