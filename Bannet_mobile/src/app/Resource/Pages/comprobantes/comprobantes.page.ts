import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.page.html',
  styleUrls: ['./comprobantes.page.scss'],
})
export class ComprobantesPage implements OnInit {
  public data = [
    { id: 'B001-182', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '30/03/2019',importe: '91.00	'},
    { id: 'B001-265', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '30/04/2019	',importe: '92.00	'},
    { id: 'B001-480', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '04/06/2019	',importe: '93.00	'},
    { id: 'B001-702', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '01/07/2019	',importe: '94.00	'},
    { id: 'B001-1041', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '01/08/2019	',importe: '95.00	'},
    { id: 'B001-1654', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '13/09/2019	',importe: '96.00	'},
    { id: 'B001-1887', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '30/09/2019	',importe: '97.00	'},
    { id: 'B001-2423', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '31/10/2019	',importe: '98.00	'},
    { id: 'B001-2851', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '30/11/2019	',importe: '99.00	'},
    { id: 'B001-3604', tcomprobante: 'BOLETA DE VENTA ELECTRONICA' ,fecha: '15/01/2020	',importe: '100.00	'},
  ];
  public results = [...this.data];

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.tcomprobante.toLowerCase().indexOf(query) > -1);
  }

  constructor(public modalCtrl: ModalController, private router: Router) {}

  ngOnInit() {}

  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
