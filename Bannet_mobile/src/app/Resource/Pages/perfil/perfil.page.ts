import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public datos = [{ id: '1', name: 'DIANA MARIBEL MENACHO CACERES',tipodoc: 'DNI',nrodocumento: '44805359',correo: 'DIAMC87@GMAIL.COM',telefono: '941395052'}];
  public results = [...this.datos];

  constructor() { }

  ngOnInit() {
  }

}
