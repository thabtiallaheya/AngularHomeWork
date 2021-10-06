import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fournisseur-component',
  templateUrl: './fournisseur-component.component.html',
  styleUrls: ['./fournisseur-component.component.css']
})
export class FournisseurComponentComponent implements OnInit {
  idFournisseur: any;
    code :any;
    libelle :any;
    hide=false;

  constructor() { 
   }

  ngOnInit(): void {
    this.idFournisseur = 105;
    this.code = 'A104B89';
    this.libelle = 'MyTeck';
   
    
    
  }

   delete(): void{
    this.hide=true;
   }

}
