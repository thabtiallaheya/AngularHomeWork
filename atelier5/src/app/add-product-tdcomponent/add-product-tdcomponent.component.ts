import { Component, OnInit } from '@angular/core';
import { Produit } from '../models/produit.model';


@Component({
  selector: 'app-add-product-tdcomponent',
  templateUrl: './add-product-tdcomponent.component.html',
  styleUrls: ['./add-product-tdcomponent.component.css']
})
export class AddProductTDComponentComponent implements OnInit {
  //list: Produit[] ;
  //produit : Produit ;
  
  list: Produit[] = [];
  produit : Produit = new Produit;
  constructor() { }

  ngOnInit(): void {
    //this.produit = new Produit();
   // this.list=[];
   
  }
  save(){
    this.list.push(this.produit);
    console.log(this.list);
  }
}
