import { Component, OnInit } from "@angular/core";
import { AuthService, pregunta } from "../../servicios/auth.service";

import { ModalController } from "@ionic/angular";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";

@Component({
  selector: "app-pregunta",
  templateUrl: "./pregunta.component.html",
  styleUrls: ["./pregunta.component.scss"]
})
export class PreguntaComponent implements OnInit {
  public AllPreguntas: any = [];

  public preguntasRes: any = [0];
  public ejemplo: any = [0, 5, 6, 4, 8, 2, "hola"];
  existe = false;
  testcompleto = false;

  constructor(
    public authservice: AuthService,
    private modal: ModalController,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.authservice.getPreguntas().subscribe(preguntas => {
      this.AllPreguntas = preguntas;

      //console.log(this.shuffle(this.ejemplo));
      this.AllPreguntas = this.shuffle(this.AllPreguntas);
    });
  }

  shuffle(array: any) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  async conrespuesta() {
    const alert = await this.alertCtrl.create({
      header: "YA RESPONDISTE",

      backdropDismiss: false,
      buttons: ["OK"]
    });

    await alert.present();
  }

  async completo() {
    const alert = await this.alertCtrl.create({
      header: "YA RESPONDISTE TODAS LAS PREGUNTAS",

      backdropDismiss: false,
      buttons: ["OK"]
    });

    await alert.present();
  }

  async respuestaBien() {
    const toast = await this.toastCtrl.create({
      message: "Correcto",
      color: "success",
      duration: 1000
    });
    toast.present();
  }

  async respuestaMal() {
    const toast = await this.toastCtrl.create({
      message: "Incorrecto",
      color: "danger",
      duration: 1000
    });
    toast.present();
  }

  cerrarPregunta() {
    this.modal.dismiss();
  }
  responder(id: string, respuesta: number) {
    this.existe = false;

    if (this.AllPreguntas.length === this.preguntasRes.length - 1) {
      this.completo();
      this.testcompleto = true;
    } else {
      for (let index = 0; index < this.preguntasRes.length; index++) {
        if (this.preguntasRes[index] === id) {
          this.existe = true;
          break;
        } else {
        }
      }
    }

    if (this.existe == true) {
      this.conrespuesta();
    } else if (this.testcompleto == false) {
      this.preguntasRes.push(id);
      for (let index = 0; index < this.AllPreguntas.length; index++) {
        if (this.AllPreguntas[index].uid === id) {
          if (this.AllPreguntas[index].opcionVerdadera === respuesta) {
            //console.log("correcto");
            this.respuestaBien();
            this.authservice.setPuntaje(this.authservice.authActual().uid);
          } else {
            //console.log("ERROR");
            this.respuestaMal();
          }
        }
      }
    }
  }
}
