import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email: string;
  public name: string;
  public password: string;


  constructor(private auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  OnSubmitRegister() {

    this.auth.register(this.email, this.password, this.name).then(auth => {


      alert("Registrado con Exito");
      console.log(auth);
      this.router.navigateByUrl('/tabs/tab2');

    }).catch(err => console.log(err))
  }

}
