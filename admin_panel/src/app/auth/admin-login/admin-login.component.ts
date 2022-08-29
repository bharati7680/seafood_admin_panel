import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/util.service';
import { __values } from 'tslib';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  adminLogin = this.fb.group({
    email: ['',  Validators.compose([Validators.required])],
    password: ['', Validators.compose([Validators.required])]

  })


  constructor(private fb: FormBuilder, private authService: AuthService, private utilService: UtilService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.adminLogin)

    if(!this.adminLogin.valid) {
      alert("invalid form")
      return
    }

    console.log(this.adminLogin.value.email)

    let email = this.adminLogin.value.email as string
    let password = this.adminLogin.value.password as string
 
    this.authService.adminlogin(email, password).subscribe(
      (response: any) => { 
        console.log(response)
        this.utilService.setStorageItem('token', response.token)
        this.router.navigate(['/country/add-country'])
      },
     (error: any) => {
      console.log(error)
     }
      
    )

  }


}
