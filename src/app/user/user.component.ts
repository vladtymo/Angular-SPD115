import { Component, Input } from '@angular/core';
import { IUser } from './user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  // email: string = 'vladtymo@gmail.com';
  // user: IUser = {
  //   id: 1000,
  //   name: 'John Smith',
  //   birthdate: new Date(),
  //   email: 'example@ukr.net',
  //   isAdmin: true
  // }
  @Input() 
  user: IUser = {
    id: 0,
    name: '',
    birthdate: new Date(),
    email: '',
    isAdmin: false
  }
}
