import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable,Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
public subject=new Subject();
  apiURL = environment.apiURL;
  constructor(private http: HttpClient) { }
  postRegis(data: any)
  {
    return this.http.post(`${this.apiURL}signUp`,data)
  }
  postotp(data: any)
  {
    return this.http.post(`${this.apiURL}otp`,data)
  }

  setData(data: any) {
      this.subject.next({otpData:data});
  }

  resendotp(data:any)
  {
    return this.http.post(`${this.apiURL}resendotp`,data)
  }
  postLogin(data: any) {
    return this.http.post(`${this.apiURL}signin`,data)
  }
  changepass(data: any) {
    return this.http.post(`${this.apiURL}changepass`,data)
  }
   getuserById(id:any):Observable<any>{
      return this.http.get(`${this.apiURL}getuserById/${id}`);
   }
  
  resetmail(data: any) {
    return this.http.post(`${this.apiURL}resetmail`,data)
  }

  Getalluser():Observable<any>{
      return this.http.get(`${this.apiURL}getalluser`);
   }
   isLoggedIn(): boolean {
    const data = localStorage.getItem('_token');
    if (!data) {
      return false;
    } else {
      return true;
    }
  }
  getUser(): any {
    try {
      const data: any = localStorage.getItem('_token');
      return jwtDecode(data);
    } catch (e) {
      return null;
    }
  }
  isAdmin(): boolean {
    return !this.getUser() ? false : this.getUser().isAdmin;
  }
}

function jwtDecode(data: any): any {
  throw new Error('Function not implemented.');
}

