import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
import {ContactService} from '../../providers/contact-service-rest';
import {ContactDetailPage} from '../contact-detail/contact-detail';

@Component({
    selector: 'page-contact-list',
    templateUrl: 'contact-list.html'
})
export class ContactListPage {

    contacts: Array<any>;
    contactsForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
    map;
    markersGroup;

    constructor(public navCtrl: NavController, public service: ContactService, public config: Config) {
        this.findAll();
    }

    openContactDetail(contact: any) {
        this.navCtrl.push(ContactDetailPage, contact);
    }

    onInput(event) {
         // Reset items back to all of the items
        this.contacts = this.contactsForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.contacts = this.contacts.filter((contact) => {
            return (contact.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.contacts = data;
                this.contactsForSearch = data;
            })
            .catch(error => alert(error));
    }

}
