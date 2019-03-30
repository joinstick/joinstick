import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedProduct:any;
  constructor() { }
  addProduct:any;
  addCart(){
     this.addProduct = this.selectedProduct;
    console.log(this.selectedProduct);
    
  }

  ngOnInit() {
  }

}
