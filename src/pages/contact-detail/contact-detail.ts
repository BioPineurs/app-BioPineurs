import {Component} from '@angular/core';
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {ContactService} from '../../providers/contact-service-rest';

@Component({
    selector: 'page-contact-detail',
    templateUrl: 'contact-detail.html'
})
export class ContactDetailPage {

    contact: any;

    constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public ContactService: ContactService, public toastCtrl: ToastController) {
        this.contact = this.navParams.data;
        ContactService.findById(this.contact.id).then(
            contact => this.contact = contact
        );
    }

    favorite(contact) {
        this.ContactService.favorite(contact)
            .then(contact => {
                let toast = this.toastCtrl.create({
                    message: 'Contact added to your favorites',
                    cssClass: 'mytoast',
                    duration: 1000
                });
                toast.present(toast);
            });
    }

    share(contact) {
        let actionSheet: ActionSheet = this.actionSheetCtrl.create({
            title: 'Share via',
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
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => console.log('cancel share')
                }
            ]
        });

        actionSheet.present();
    }

}
