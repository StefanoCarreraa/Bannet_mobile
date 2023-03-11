import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios-post-venta',
  templateUrl: './servicios-post-venta.page.html',
  styleUrls: ['./servicios-post-venta.page.scss'],
})
export class ServiciosPostVentaPage implements OnInit {
  currentFood = undefined;

  public data = [
    { id: '1', name: 'PUNTO ADICIONAL DE RED DE DATOS S/CANALETA S/. 65,00' },
    { id: '2', name: 'PUNTO ADICIONAL DE RED DE DATOS C/CANALETA S/. 95,00' },
    { id: '3', name: 'REUBICACION DE SET TOP BOX S/. 65,00' },
    { id: '4', name: 'REUBICACION DE SINTONIZADOR (DECO) S/. 65,00' },
    { id: '5', name: 'REUBICACION DE ROUTER/ONT/ONU S/. 50,00' },
    { id: '6', name: 'REPOSICION DE SINTONIZADOR S/. 100,00' },
    { id: '7', name: 'REPOSICION SET TOP BOX S/. 150,00' },
    { id: '8', name: 'REPOSICION DE CONTROL REMOTO S/. 30,00' },
    { id: '9', name: 'REPOSICION DE ONT S/. 250,00' },
    { id: '10', name: 'CAMBIO DE PATH CORD DE FIBRA OPTICA S/. 22,00' },
    { id: '11', name: 'CAMBIO DE ACOMETIDA S/. 80,00' },
    { id: '12', name: 'TRASLADO DE SERVICIO EXTERNO(MUDANZA) S/. 80,00' },
    { id: '13', name: 'TRASLADO DE SERVICIO CONDOMINIO(MUDANZA) S/. 35,00' },
    { id: '14', name: 'REPOSICION DE FUENTE DE PODER(CARGADOR) S/. 20,00' },
    { id: '15', name: 'ADQUISICIÓN DE MESH S/. 220.00' },
    { id: '16', name: 'REUBICACIÓN DE MESH S/. 65.00' },
    {
      id: '17',
      name: 'CONDOMINIO DHMONT REUBICACIÓN DE ROUTER ONT(ROUTER) S/. 35,00',
    },
    { id: '18', name: 'ADQUISICION MESH INTERPRISE S/. 150.00' },
    { id: '19', name: 'ADQUISICIÓN DE SWITCH S/. 50.00' },
  ];
  public results = [...this.data];
  public data2 = [
    {
      id: '2',
      name: '2023-0000000577 / PLAN 2023-02 INTERNET 100MBPS + 1 BANTEL TV'
    },
    { id: '3', name: '2022-0000004241 / PLAN 2022-1 INTERNET + 1 CATV 30MBPS' },
    { id: '4', name: '2021-0000012798 / PLAN 2020-2 INTERNET 30 MBPS' },
    {
      id: '1',
      name: '2019-0000000100 / PLAN FAMILIAR INTERNET 30 MBPS + 2CATV'
    },
  ];
  public results2 = [...this.data2];

  constructor() {}

  ngOnInit() {}
}
