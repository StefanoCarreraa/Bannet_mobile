import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-recibos',
  templateUrl: './detalle-recibos.page.html',
  styleUrls: ['./detalle-recibos.page.scss'],
})
export class DetalleRecibosPage implements OnInit {
  datos: any;
  id:any;
  plan:any;
  periodo:any;
  importe:any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.datos = params.get('result');
      this.id=params.get('id');
      this.plan=params.get('plan');
      this.periodo=params.get('periodo');
      this.importe=params.get('importe');
      console.log(this.id,this.plan,this.periodo,this.importe);
    });
  }

}
