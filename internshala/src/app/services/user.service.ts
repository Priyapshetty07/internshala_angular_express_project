import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private myhttp:HttpClient) { }
  getProfile(){
    return this.myhttp.get('http://localhost:4200/api/users')
  }
  registerDetails(data:any){
    return this.myhttp.post('http://localhost:4200/api/users/register',data,{ responseType:'text'})
  }
  loginUser(email: string, paswd: string) {
    //rest api call to express
    let loginData = {
      username: email,
      password: paswd
    };

    return this.myhttp.post('api/users/login', loginData);
  }
}
