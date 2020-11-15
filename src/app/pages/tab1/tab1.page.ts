import { Component, OnInit } from '@angular/core';
import { AuthService} from "../../servicios/auth.service";
import { ModalController } from '@ionic/angular';
import { PreguntaComponent } from "../../componentes/pregunta/pregunta.component";


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(public authservice : AuthService, private modal : ModalController) { }

  ngOnInit() {
    
  }

  abrirpregunta() {
    this.modal.create({
      component: PreguntaComponent,
      componentProps : {

      }
    }).then( (modal) => modal.present())
  }
}