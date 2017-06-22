import { Component, OnInit } from '@angular/core';
import {User} from '../user.model';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {UserDetailComponent} from '../user-detail/user-detail.component';

@Component({
  moduleId: module.id,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  users: User[];

  constructor(private userService: UserService,
              private router: Router) {};

  getUsers():void{
    this.userService
        .getUsers()
        .subscribe(data => this.users = data),
                  () => console.log('cargo');
   
  }

 

  ngOnInit() {
    this.getUsers();
  }

 
}
