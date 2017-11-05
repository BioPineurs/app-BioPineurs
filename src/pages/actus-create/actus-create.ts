import {Component, Injectable} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import {ActionSheetController, ActionSheet, NavController, NavParams, ToastController} from 'ionic-angular';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import {ActuService} from '../../providers/actu-service-rest';
import {ContactService} from '../../providers/contact-service-rest';


@Component({
    selector: 'page-actus-create',
    templateUrl: 'actus-create.html'
})


export class ActuCreatePage {

  contacts: Array<any>;
  public title;
  public author;
  public body;
//  title: Array<any>;
//  body: Array<any>;

    constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public service: ContactService, public http: Http) {
      this.findAll();
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
       }, error => {
        console.log(error);// Error getting the data
    });
  }
}
