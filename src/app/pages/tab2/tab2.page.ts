import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../servicios/auth.service";

import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {

  userName: string;
  userUid: string;
  userPuntaje: number;

  constructor(public authservice : AuthService, private navCtrl: NavController) 
  { }

  ngOnInit() {

  
      
    this.authservice.getUsuario().subscribe((user) => {
      this.userName = user.payload.data()['name'];
      this.userPuntaje = user.payload.data()['puntaje'];
        
    });;
      

    
  }

  Onlogout(){

    this.authservice.logout();
  
   }
}
