import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  constructor(private authService: AuthService, public router: Router) { }

  ngOnInit() {

  }

  OnsubmitLogin() {

    this.authService.login(this.email, this.password).then(res => {

      this.router.navigateByUrl('/tabs/tab2');

    }).catch(err => alert('Los datos son incorrectos'));

  }

}
