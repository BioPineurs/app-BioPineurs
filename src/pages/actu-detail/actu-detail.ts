import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {ActuService} from '../../providers/actu-service-rest';

@Component({
    selector: 'page-actu-detail',
    templateUrl: 'actu-detail.html'
})
export class ActuDetailPage {

    actu: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public ActuService: ActuService, public toastCtrl: ToastController) {
        this.actu = this.navParams.data;
        ActuService.findById(this.actu.id).then(
            actu => this.actu = actu
        );
    }

    favorite(actu) {
        this.ActuService.favorite(actu)
            .then(actu => {
                let toast = this.toastCtrl.create({
                    message: 'Actualité ajoutée aux favoris',
                    cssClass: 'mytoast',
                    duration: 3000
                });
                toast.present(toast);
            });
    }

    share(actu) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Partager',
            buttons: [
                {
                    text: 'Twitter',
                    handler: () => console.log('share via twitter')
                },
                {
                    text: 'Facebook',
                    handler: () => console.log('share via facebook')
                },
                {
                    text: 'Email',
                    handler: () => console.log('share via email')
                },
                {
                    text: 'Annueler',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
