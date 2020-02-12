import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  titulo: string;

  constructor(private alert: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alert.create({
      header: 'Selecciona tu el nombre!',
      inputs: [
        {
          name: 'txtName',
          type: 'text',
          placeholder: 'Nuevo nombre de pagina'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: ( data ) => {
            console.log('Confirm Ok', data);
            this.titulo = data.txtName;
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alert',
      subHeader: 'Esta seguro de Aceptar',
      message: 'Esto es un mensaje de alerta.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'dary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ],
      cssClass: 'alertclass'
    });

    await alert.present();
  }

}
