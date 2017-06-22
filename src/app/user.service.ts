import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import {User} from './user.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usersURL = 'assets/users.json';

  constructor(private http: Http) { }

  public getUsers = (): Observable<User[]> =>{
    return this.http.get(this.usersURL)
    .map((response: Response)=><User[]>response.json())
    .catch(this.handleError);
  }

  public getUser = (id : string) : Observable<User>=>{
   
        return this.http.get(this.usersURL)
      .map((response: Response)=><User[]>response.json())
      .map((list: Array<any>) =>{
       // let result: NewsModel = new NewsModel();
       let result: User;
        if (list) {
          list.forEach(element => {
            if (element._id === id) {
              result = element;
            }
          });
         
          return result;
        }
      })
   
      .catch(this.handleError);
  }

  private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }

}
