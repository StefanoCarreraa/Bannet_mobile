import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-comprobantes',
  templateUrl: './detalle-comprobantes.page.html',
  styleUrls: ['./detalle-comprobantes.page.scss'],
})
export class DetalleComprobantesPage implements OnInit {
  datos: any;
  id:any;
  tcomprobante:any;
  fecha:any;
  importe:any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.datos = params.get('result');
      this.id=params.get('id');
      this.tcomprobante=params.get('tcomprobante');
      this.fecha=params.get('fecha');
      this.importe=params.get('importe');
      console.log(this.id,this.tcomprobante,this.fecha,this.importe);
    });
  }
}
