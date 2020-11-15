import { Component, OnInit } from '@angular/core';
import { AuthService, usuario} from "../../servicios/auth.service";

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

  public allUsuarios: any = [];

  constructor(public authservice : AuthService) { }

  ngOnInit() {
     
    this.authservice.getUsuariosLista().subscribe((usuarios) => {
        
      this.allUsuarios = usuarios;
      
    });
    
  }
  

}
