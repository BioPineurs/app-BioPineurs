import {Component} from '@angular/core';
import {Config, NavController, NavParams, ToastController} from 'ionic-angular';
import {ActuService} from '../../providers/actu-service-rest';
import {ActuDetailPage} from '../actu-detail/actu-detail';
import leaflet from 'leaflet';

@Component({
    selector: 'page-actu-list',
    templateUrl: 'actus-list.html'
})


export class ActuListPage {

    actus: Array<any>;
    actusForSearch: Array<any>;
    searchKey: string = "";
    viewMode: string = "list";
/*
    map;
    markersGroup;
*/
    constructor(public navCtrl: NavController, public service: ActuService, public config: Config, public toastCtrl: ToastController) {
        //this.findAll();
        this.poll();
    }

    openActuDetail(actu: any) {
        this.navCtrl.push(ActuDetailPage, actu);
    }

    poll(){
        this.findAll();
        console.log('Polling page');
        //window.setTimeout(this.poll.bind(this), 5000); //en ms
    }

    onInput(event) {
         // Reset items back to all of the items
        this.actus = this.actusForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.actus = this.actus.filter((actu) => {
            return (actu.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
    }

    onCancel(event) {
        this.findAll();
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.actus = data;
                this.actusForSearch = data;
            })
            .catch(error => alert(error));
    }

  doRefresh(refresher) {
    console.log('Begin async refresh operation', refresher);

    setTimeout(() => {
      console.log('Async refresh operation has ended');
      this.findAll();
      refresher.complete();
    }, 1000); //en ms
  }
}