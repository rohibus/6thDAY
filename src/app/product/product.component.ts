import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit 
{
obj:Product;
pid:number;
pname:string;
price:number;
stock:number;
  constructor(private router:Router) 
  {
      this.obj=new Product();
  }

  ngOnInit(): void {
  }

  Add()
  {
    this.obj.pid=this.pid;
    this.obj.pname=this.pname;
    this.obj.price=this.price;
    this.obj.stock=this.stock;

    localStorage.setItem("pid",this.pid.toString());
    localStorage.setItem("pname",this.pname);
    localStorage.setItem("price",this.price.toString());
    localStorage.setItem("stock",this.stock.toString());
    this.router.navigateByUrl('view');

  }

}
