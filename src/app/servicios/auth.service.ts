import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule} from "@angular/fire/auth";
import { Router } from "@angular/router";
import { promise } from 'protractor';
import { resolve } from 'url';
import { reject } from 'q';

import { AngularFirestore} from "@angular/fire/firestore"
import * as firebase from 'firebase/app';
import { from } from 'rxjs';
import { map } from "rxjs/operators";


export interface usuario{
  name: string
  puntaje: number
  uid: string
}
export interface pregunta{
  uid: string
  opcion1: any
  opcion2: any
  opcion3: any
  opcion4: any
  opcionVerdadera: any
  tituloPregunta: string
}


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private AFauth : AngularFireAuth, private router: Router, private db : AngularFirestore) { }

  login(email:string, password:string){


    return new Promise((resolve, rejected) =>{

      this.AFauth.auth.signInWithEmailAndPassword(email, password).then(user =>{
        
        resolve(user);

      }).catch(err => rejected(err));

    });   
  }

  logout(){

    this.AFauth.auth.signOut().then( () => {

      this.router.navigate(['/login']);


    });


  }

  register(email : string, password : string, name : string){

    return new Promise((resolve, reject) =>{
      this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res =>{

        //console.log(res.user.uid);
        const uid = res.user.uid;
        
        this.db.collection('users').doc(uid).set({

          name : name,
          puntaje : 0,
          uid : uid

        })
        resolve(res)
      }).catch(err => reject(err));

    });
  }

  authActual(){
    return firebase.auth().currentUser
  }

  getUsuario(){
    //console.log(firebase.auth().currentUser.uid);
    //console.log(firebase.auth().currentUser);
    return this.db.collection('users').doc(firebase.auth().currentUser.uid).snapshotChanges();

   
  }

  getUsuariosLista(){

    return this.db.collection('users', ref => ref.orderBy('puntaje','desc')).snapshotChanges().pipe(map(usuarios => {
      return usuarios.map(a =>{
        const data = a.payload.doc.data() as usuario;
        data.uid = a.payload.doc.id;
        return data;
      })
    }));
  }

  setPuntaje(id: string){
    var Ref = this.db.collection('users').doc(id);

     // incrementa el puntaje en 1.
      Ref.update({
      puntaje: firebase.firestore.FieldValue.increment(1)
    });
  }

  getPreguntas(){

    return this.db.collection('preguntas').snapshotChanges().pipe(map(preguntas => {
      return preguntas.map(a =>{
        const data = a.payload.doc.data() as pregunta;
        data.uid = a.payload.doc.id;
        return data;
      })
    }));
  }
  
}
