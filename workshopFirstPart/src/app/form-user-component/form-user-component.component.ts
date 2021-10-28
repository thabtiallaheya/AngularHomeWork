import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-form-user-component',
  templateUrl: './form-user-component.component.html',
  styleUrls: ['./form-user-component.component.css']
})
export class FormUserComponentComponent implements OnInit {
  user: User = new User;
   list: User[] = [];
  constructor() { }

  ngOnInit(): void {
    this.user.accountCategory="Customer";
  }
  save(){
    
    this.list.push(this.user);
    console.log(this.list);
    //this.route.navigate(['/user']) ; // rediret to an other page
  }

}
