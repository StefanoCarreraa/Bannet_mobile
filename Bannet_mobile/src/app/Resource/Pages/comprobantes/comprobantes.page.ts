import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-comprobantes',
  templateUrl: './comprobantes.page.html',
  styleUrls: ['./comprobantes.page.scss'],
})
export class ComprobantesPage implements OnInit {
  public data = ['B001-182', 'B001-183','B001-185','B001-189','B001-198','B001-233','B001-244','B001-246','B001-268','B001-278','B001-296','B001-325','B001-365'];
  public results = [...this.data];
  
  handleChange(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(query) > -1);
  }

  constructor(
    public modalCtrl: ModalController
  ) { }



  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}

