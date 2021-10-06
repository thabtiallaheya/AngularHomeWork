import { Component, OnInit } from '@angular/core';
import { Fournisseur } from '../models/fournisseur';

@Component({
  selector: 'app-list-fournisseur-component',
  templateUrl: './list-fournisseur-component.component.html',
  styleUrls: ['./list-fournisseur-component.component.css']
})
export class ListFournisseurComponentComponent implements OnInit {
  list: Fournisseur[] = [];
 
 // fourniseur!: { idFournisseur: number; code: string; libelle: string; }[];
  constructor() { }

  ngOnInit(): void {
    this.list= [
      {idFournisseur:1,code:"1ABC4522",libelle:"hp"},
      {idFournisseur:2,code:"2ABC4522",libelle:"dell"},
      {idFournisseur:3,code:"3ABC4522",libelle:"lenovo"},
      {idFournisseur:400,code:"40ABC452",libelle:"asus"}
      ] ;
  }
  getColor(fournisseur: Fournisseur)
  { if(fournisseur.libelle=="hp")
    return 'green';
  else
  return 'yellow'}
  getSize(fournisseur: Fournisseur)
  { if(fournisseur.code.startsWith('2A'))
    return 'bold';
  else
  return 'normal'}
  delete(fournisseur: Fournisseur)
  {let i = this.list.indexOf(fournisseur);
    
    this.list.splice(i,1);}

}
