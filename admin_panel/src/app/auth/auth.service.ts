import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { ApiMethod } from '../common/services/consts';
import { HttpService } from '../common/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpservice: HttpService) { }

  adminlogin(email: string, password: string) {

    const body = {
      email: email,
      password: password
    }

    return this.httpservice.requestCall("/api/users/signin", ApiMethod.POST, body)
     .pipe(map(data => {
       return data
     }))
  }
}
