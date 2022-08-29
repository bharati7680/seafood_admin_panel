import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/common/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private utilService: UtilService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.utilService.removeStorageItem('token')
    this.router.navigate(["/authentication/admin-login"])
  }

}
