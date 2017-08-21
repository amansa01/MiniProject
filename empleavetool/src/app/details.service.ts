import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Headers} from '@angular/http';
import {Router} from "@angular/router";

@Injectable()
export class DetailsService {
  public userDetails: any;
  public response: any;

  constructor(private http: Http, private router:Router) {
  }

  loginValues(loginData: any) {
    event.preventDefault();
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');

    this.response = this.http.post('http://localhost:8080/empLeaveTool-1/emp/login', loginData, {withCredentials: true}).toPromise();
    if (this.response.isEmpty()) {
      console.log('Nothing returns');
      this.router.navigate(['']);
    }
    else {
      return this.response;
    }
  }


  setDetails(userDetails: any) {
    this.userDetails = userDetails;
  }

  getDetails() {
    if (this.userDetails) {
      return Promise.resolve(this.userDetails);
    } else {
      return Promise.reject('Not available');
    }
  }
}
