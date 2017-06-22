import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { User } from '../user.model';

@Component({
//  moduleId: module.id,
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user : User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
    
  ) { }

  ngOnInit() {

     this.route.params.subscribe(params=>{
     
      let id = params['id'];
      
     
      let userdetailcall = this.userService.getUser(id);

     

      userdetailcall.subscribe(data =>{
        this.user = data;
      })

    })
   
  }

  back(): void {
    this.location.back();
  }

}
