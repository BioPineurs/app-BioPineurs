import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {SERVER_URL} from './config';
import 'rxjs/Rx';

let contactsURL = SERVER_URL + 'api/contacts/';

@Injectable()
export class ContactService {
  favoriteCounter: number = 0;
  favorites: Array<any> = [];

    constructor(public http: Http) {
        this.http = http;
    }

    findAll() {
        return this.http.get(contactsURL)
            .map(res => res.json())
            .toPromise();
    }

    findById(id) {
        return this.http.get(contactsURL + "id/" + id)
            .map(res => res.json())
            .toPromise();
    }

    getFavorites() {
        return Promise.resolve(this.favorites);
    }

    favorite(contact) {
        this.favoriteCounter = this.favoriteCounter + 1;
        this.favorites.push({id: this.favoriteCounter, contact: contact});
        return Promise.resolve();
    }

    unfavorite(favorite) {
        let index = this.favorites.indexOf(favorite);
        if (index > -1) {
          this.favorites.splice(index, 1);
        }
        return Promise.resolve();
    }
}