import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro-reclamaciones',
  templateUrl: './libro-reclamaciones.page.html',
  styleUrls: ['./libro-reclamaciones.page.scss'],
})
export class LibroReclamacionesPage implements OnInit {
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
  
  constructor() { }

  ngOnInit() {
  }

}
