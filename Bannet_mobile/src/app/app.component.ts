import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/pages/home', icon: 'Home' },
    { title: 'Recibo de Servicios', url: '/pages/recibo-servicios', icon: 'clipboard-outline' },
    { title: 'Comprobantes', url: '/pages/comprobantes', icon: 'clipboard-outline' },
    { title: 'Medir Velocidad', url: '/pages/medir-velocidad', icon: 'speedometer-outline' },
    { title: 'Servicios PostVenta', url: '/pages/servicios-post-venta', icon: 'clipboard-outline' },
    { title: 'Libro de Reclamaciones', url: '/pages/libro-reclamaciones', icon: 'library-outline' },
    { title: 'welcome', url: '/welcome', icon: 'accessibility-outline' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  
  constructor() {}

}
