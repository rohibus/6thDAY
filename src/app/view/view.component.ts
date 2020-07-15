import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit 
{
    pid:number;
    pname:string;
    price:number;
    stock:number;


  constructor() 
  { 
    this.pid=parseInt(localStorage.getItem("pid"));
    this.pname=localStorage.getItem("pname");
    this.price=parseInt(localStorage.getItem("price"));
    this.stock=parseInt(localStorage.getItem("stock"));
  }

  ngOnInit(): void {
  }

}
