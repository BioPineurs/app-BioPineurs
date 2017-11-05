import {Component} from '@angular/core';
import {Config, NavController} from 'ionic-angular';
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
    constructor(public navCtrl: NavController, public service: ActuService, public config: Config) {
        this.findAll();
    }

    openActuDetail(actu: any) {
        this.navCtrl.push(ActuDetailPage, actu);
    }

    onInput(event) {
         // Reset items back to all of the items
        this.actus = this.actusForSearch;

        // set val to the value of the searchbar
        let val = this.searchKey;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.actus = this.actus.filter((actu) => {
            return (actu.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
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
/*
    showMap() {
        setTimeout(() => {
            this.map = leaflet.map("map").setView([48.85, 2.35], 10);
            leaflet.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
                attribution: 'Tiles &copy; Esri'
            }).addTo(this.map);
            this.showMarkers();
        })
    }

    showMarkers() {
        if (this.markersGroup) {
            this.map.removeLayer(this.markersGroup);
        }
        this.markersGroup = leaflet.layerGroup([]);
        this.shows.forEach(show => {
            if (show.lat, show.lng) {
                let marker: any = leaflet.marker([show.lat, show.lng]).on('click', event => this.openShowDetail(event.target.data));
                marker.data = show;
                this.markersGroup.addLayer(marker);
            }
        });
        this.map.addLayer(this.markersGroup);
    }
*/
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}