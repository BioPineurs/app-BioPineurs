import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ActuService} from '../../providers/actu-service-rest';
import {ActuDetailPage} from '../actu-detail/actu-detail';

@Component({
    selector: 'page-favorite-list',
    templateUrl: 'favorite-list.html'
})
export class FavoriteListPage {

    favorites: Array<any>;

    constructor(public navCtrl: NavController, public service: ActuService) {
        this.getFavorites();
    }

    itemTapped(favorite) {
        this.navCtrl.push(ActuDetailPage, favorite.actu);
    }

    deleteItem(favorite) {
        this.service.unfavorite(favorite)
            .then(() => {
                this.getFavorites();
            })
            .catch(error => alert(JSON.stringify(error)));
    }

    getFavorites() {
        this.service.getFavorites()
            .then(data => this.favorites = data);
    }

}
