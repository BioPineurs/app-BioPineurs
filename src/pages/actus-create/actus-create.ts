import {Component, Injectable, ElementRef, Directive} from '@angular/core';
import {ActuListPage} from '../actus-list/actus-list';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {ActuService} from '../../providers/actu-service-rest';
import {ContactService} from '../../providers/contact-service-rest';
//import {Autosize} from '../../directives/autosize/autosize';


@Component({
    selector: 'page-actus-create',
    templateUrl: 'actus-create.html'
})


export class ActuCreatePage {

  contacts: Array<any>;
  public title;
  public author;
  public body;

    constructor(public element:ElementRef, public navCtrl: NavController, public formBuilder: FormBuilder, public service: ContactService, public http: Http, public toastCtrl: ToastController) {
      this.findAll(), error => {
        console.log(error);// Error getting the data
        let toast = this.toastCtrl.create({
                    message: 'Problème : vérifiez votre connexion',
                    cssClass: 'mytoast',
                    duration: 30000
                });
        toast.present(toast);
      }
    }

    findAll() {
        this.service.findAll()
            .then(data => {
                this.contacts = data;
                console.log(data);
            })
            .catch(error => alert(error));
    }

    onCancel(event) {
        this.findAll();
    }

// Requete pour créer une nouvelle actualité en passe par POST situé à actus/create
    postRequest() {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
     
        let postParams = {
          title: this.title,
          author: this.author,
          body: this.body
    }
    
    this.http.post("https://biopineurs.herokuapp.com/actus/create", postParams, options)
      .subscribe(data => {
        console.log(postParams);
        let toast = this.toastCtrl.create({
                    message: 'Actualité postée',
                    cssClass: 'mytoast',
                    duration: 3000
                });
        toast.present(toast);
        this.navCtrl.push(ActuListPage);
       }, error => {
        console.log(error);// Error getting the data
        let toast = this.toastCtrl.create({
                    message: 'Problème : vérifiez votre connexion',
                    cssClass: 'mytoast',
                    duration: 3000
                });
        toast.present(toast);
    });
  }
}
