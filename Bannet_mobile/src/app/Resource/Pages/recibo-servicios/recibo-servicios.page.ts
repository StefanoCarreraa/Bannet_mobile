import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-recibo-servicios',
  templateUrl: './recibo-servicios.page.html',
  styleUrls: ['./recibo-servicios.page.scss'],
})
export class ReciboServiciosPage implements OnInit {
  
  public data = [
    { id: '000000000281662', plan: 'PLAN 2023-02 INTERNET 100MBPS + 1 BANTEL TV' ,periodo: '2023 - MARZO',importe: '91.00	'},
    { id: '000000000353253', plan: 'PLAN 2023-02 INTERNET 100MBPS + 1 BANTEL TV' ,periodo: '2023 - MARZO',importe: '92.00	'},
    { id: '000000000643643', plan: 'PLAN 2023-02 INTERNET 100MBPS + 1 BANTEL TV' ,periodo: '2023 - MARZO',importe: '93.00	'},
    { id: '000000000241195', plan: 'PLAN 2023-02 INTERNET 100MBPS + 1 BANTEL TV' ,periodo: '2023 - MARZO',importe: '94.00	'},
  ];
  public results = [...this.data];

  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.plan.toLowerCase().indexOf(query) > -1);
  }
  constructor(
    public modalCtrl: ModalController
  ) { 
    
  }

  ngOnInit() {
  }
  async dismiss() {
    await this.modalCtrl.dismiss();
  }
}
